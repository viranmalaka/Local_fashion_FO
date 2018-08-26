import {NgForm} from '@angular/forms';

declare var stripe: any;
declare var elements: any;
declare let paypal: any;

import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ItemService} from '../item.service';
import {AddressApi, CouponApi, ItemApi, OrderApi, UserApi} from '../../lb-services/services/custom';
import {Address} from '../../lb-services/models';
import 'rxjs/add/operator/take';
import {ToasterService} from 'angular2-toaster';
import {CurrencyChangePipe} from '../../common/currency-change.pipe';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('modalBackground') private modalBackground: ElementRef;

  isAuth = false;
  nonAuthEmail = '';

  // items = [];
  total = 0;
  totalCount = 0;

  couponDiscount = 0;
  couponPercentage = 0;
  couponName = '';
  appliedCouponId = 0; // 0 means no applied coupon

  address = [];
  addressModal = false;
  selectedAddress;
  addressForm = new Address();
  addressMode = 1;
  paymentMode = 0;
  billingAddress = {};
  disableBA = false;
  paying = false;

  // strip
  @ViewChild('cardInfo') cardInfo: ElementRef;
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  // paypal
  public didPaypalScriptLoad = false;
  public loading = true;
  paypalValidating = false;
  couponDesable = false;

  constructor(private itemService: ItemService, private itemApi: ItemApi, public transService: TranslateService,
              private cd: ChangeDetectorRef, private userApi: UserApi,
              private addressApi: AddressApi, private couponApi: CouponApi, private router: Router,
              private toastr: ToasterService, private orderApi: OrderApi, private currency: CurrencyChangePipe) {
  }

  ngOnInit() {
    this.itemService.init(() => {
      this.total = this.itemService.getTotalCost()[0];
      this.totalCount = this.itemService.getTotalCount();
      // this.nonDiscountTotal = this.itemService.getNonDiscountCost();
    });

    this.isAuth = this.userApi.isAuthenticated();
    if (this.isAuth) {
      this.addressApi.find({
        where: {userId: this.userApi.getCurrentToken().userId}
      }).take(1).subscribe(address => {
        this.address = address;
        this.selectedAddress = address[0]; // TODO should be default one
        if (address.length === 0) {
          this.addressMode = 2;
        }
      });
    } else {
      this.addressMode = 2;
    }
    // this.addressForm.country = 'IT';
    this.addressForm.title = null;
    this.addressForm.type = null;
  }

  ngAfterViewInit() {
    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.cardHandler);

    // this.paypalViewInit();
    // this.itemService.getPaypalOrderDetails((details) => {
    //   this.paypalItemListDetails = details;
    // });
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  // <editor-fold desc="paypal">
  paypalInit() {
    this.couponDesable = true;

    // validate order
    // generate paypal required objects
    if (!this.paypalValidating) {
      this.paypalValidating = true;
      this.validateOrder(odr => {
        if (odr && odr.result && odr.result.success) {
          this.toastr.pop('warning', 'Order validation pass...');

          this.itemService.getPaypalOrderDetails(this.couponDiscount, list => {
            // console.log(list, odr.result['orderPrice'].toFixed(2));

            if (!this.didPaypalScriptLoad) {
              this.loadPaypalScript().then(() => {
                // paypal button render
                paypal.Button.render({
                  env: 'sandbox',
                  client: {
                    sandbox: 'AYnKDoWhFFPq1Wpx-8v66iVUkq4TfdLw9RHKRhsotKG_x-5jrxFySWwucpwLoyln3FZ7uUbnY_VCtsmA',
                    production: 'xxxxxxxxxx'
                  },
                  style: {
                    size: 'medium', // tiny, small, medium
                    color: 'gold', // orange, blue, silver
                    shape: 'rect'    // pill, rect
                  },
                  commit: false,
                  payment: (data, actions) => {
                    return actions.payment.create({
                      payment: {
                        transactions: [{
                          item_list: {
                            items: list
                          },
                          amount: {
                            currency: 'EUR',
                            total: parseFloat(odr.result['orderPrice']).toFixed(2)
                          },
                          description: 'Hat for the best team ever'
                        }]
                      }
                    });
                  },
                  onAuthorize: (data, actions) => {
                    return actions.payment.execute().then((payment) => {
                      // show success page
                      this.paying = true;
                      console.log('paypal place');
                      this.orderApi.paypalPlace({
                        orderId: odr.result.orderId,
                        token: odr.result.token,
                        orderDetails: this.getOrderDetailsArray(this.itemService.selectedItems),
                        // stripe_id: token.id,
                        totalPrice: this.total,
                        finalPrice: this.total - this.couponDiscount,
                        payment_info: JSON.stringify({data: data, payment: payment}),
                      }).subscribe(response => {
                        this.toastr.pop('warning', 'Your Order Success');
                        this.paying = false;
                        console.log(data);
                        this.itemService.selectedItems = {};
                        this.itemService.store();
                        this.router.navigate(['user-cart/checkout/success']);
                      });
                    });
                  },
                }, '#paypal-button');
                this.loading = false;

              });
            }
          });
        } else {
          this.loading = true;
          this.paymentMode = 0;
          this.couponDesable = false;
        }
      });
    }
  }

  public loadPaypalScript(): Promise<any> {
    this.didPaypalScriptLoad = true;
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  // </editor-fold>


  // stripe form
  onChange({error}) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
    if (!this.paying) {
      this.paying = true;
      const {token, error} = await stripe.createToken(this.card, {
        email: form.value.cardEmail,
        address_city: form.value.city,
        address_country: form.value.country,
        address_line1: form.value.add1,
        address_line2: form.value.add2,
        address_state: form.value.state,
      });

      if (error) {
        console.log('Something is wrong:', error);
        this.toastr.pop('error', 'Opss.. Something went wrong..');
        this.paying = false;
      } else {
        console.log('Success!', token);
        this.toastr.pop('warning', 'Credit card verification success');
        this.validateOrder((odr) => {
          if (odr && odr.result && odr.result.success) {
            this.toastr.pop('warning', 'Order validation pass...');
            this.orderApi.stripPlace({
              orderId: odr.result.orderId,
              token: odr.result.token,
              orderDetails: this.getOrderDetailsArray(this.itemService.selectedItems),
              stripe_id: token.id,
              totalPrice: this.total,
              finalPrice: this.total - this.couponDiscount,
            }).subscribe(data => {
              this.toastr.pop('warning', 'Your Order Success');
              this.paying = false;
              console.log(data);
              this.itemService.selectedItems = {};
              this.itemService.store();
              this.router.navigate(['user-cart/checkout/success']);
            });
          }
        });
      }
    }
  }

  backgroundClose(event) {
    if (event.target === this.modalBackground.nativeElement) {
      this.addressModal = false;
    }
  }

  updateCountry(val, form) {
    form.country = val;
  }

  applyCoupon() {
    if (this.couponDiscount === 0) {
      // FIXME : remember to change auto generated lb-sdk code (postBody = req)
      this.couponApi.apply(JSON.stringify({id: this.couponName})).take(1).subscribe(data => {
        if (data.result && data.result.success) {
          const d = data.result.res;
          if (!d.expire || (d.expire && new Date(d.expire) < new Date())) {
            if (d.discount_percentage && d.discount_percentage > 0) {
              this.couponDiscount = this.total * d.discount_percentage / 100;
              this.couponPercentage = d.discount_percentage;
              this.appliedCouponId = d.id;
              this.toastr.pop('warning', 'The coupon is applied.', 'you have ' + d.discount_percentage + '% discount');
            } else if (d.discount_value && d.discount_value > 0) {
              this.couponDiscount = d.discount_value;
              this.couponDiscount = this.couponDiscount < 0 ? 0 : this.couponDiscount;
              this.appliedCouponId = d.id;
              this.toastr.pop('warning', 'The coupon is applied.', 'you have ' +
                this.currency.transform(d.discount_value) + ' discount');
            }
          } else {
            this.toastr.pop('error', 'Sorry.. The coupon has expired');
          }
        } else {
          this.toastr.pop('error', 'Invalid coupon ID');
        }
      });
    } else {
      this.toastr.pop('warning', 'You have already applied a coupon.');
    }
  }

  /**
   * send a order palace object to server
   * {
   *  addressId: required
   *  couponId: [can be null]
   *  selectedItem: Array in server form (like cart details)
   *  ngTotalPrice:
   *  ngFinalPrice:
   *  user: [can be null (guest)]
   * }
   */
  validateOrder(callback) {
    // check selected item count is not 0;
    const items = this.itemService.selectedItems;
    if (Object.keys(items).length === 0) {
      this.toastr.pop('warning', 'You cart is empty');
      callback();
    } else {
      // not executing now
      const afterAddressSave = () => {
        const orderObj = {
          addressId: this.selectedAddress.id,
          couponId: this.appliedCouponId,
          selectedItems: this.getOrderDetailsArray(items),
          // ngPrice1: this.itemService.getNonDiscountCost(),
          ngPrice2: this.itemService.getTotalCost()[0],
          ngPrice3: this.itemService.getTotalCost()[0] - this.couponDiscount,
          ngItemCount: this.itemService.getTotalCount(),
        };

        if (this.userApi.isAuthenticated()) {
          orderObj['userId'] = this.userApi.getCurrentToken().userId;
        } else {
          const validateEmail = (email) => {
            /* tslint:disable */
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            /* tslint:enable */return re.test(String(email).toLowerCase());
          };
          if (validateEmail(this.nonAuthEmail)) {
            orderObj['additionalNote'] = this.nonAuthEmail;
          } else {
            this.toastr.pop('error', 'Email invalid');
            this.paypalValidating = false;
            callback();
          }
        }
        console.log(orderObj);
        // FIXME : remember to change auto generated lb-sdk code (postBody = req)
        this.orderApi.validateOrder(orderObj).subscribe(response => {
          callback(response);
        });
      };

      if (this.addressMode === 2) {
        // save address
        if (this.userApi.isAuthenticated()) {
          this.addressForm.userId = parseInt(this.userApi.getCurrentToken().userId, 10);
        } else {
          this.addressForm.userId = null; // guests
        }
        this.addressApi.create(this.addressForm).subscribe(newAddress => {
          if (this.isAuth) {
            this.toastr.pop('warning', 'Your new address is added');
          }
          this.selectedAddress = newAddress;
          afterAddressSave();
        }, error1 => {
          this.toastr.pop('error', 'Error in your address');
          this.paypalValidating = false;
          callback();
        });
      } else {
        afterAddressSave();
      }
    }
  }

  getOrderDetailsArray(items) {
    const selectedItems = [];
    Object.keys(items).forEach(key => {
      selectedItems.push({
        itemId: key,
        size: items[key].size,
        quantity: items[key].quantity,
        category: items[key].category,
        unitPrice: items[key].price,
      });
    });
    return selectedItems;
  }
}

// order path
// --- client ---
/*
0. validate the credit card info
1. send save address request if add new
2. send selected Item list and, coupon to validate the current price.
3. send selected item list, coupon, address, user Info and send place order req

4. redirect to success order page

--- server --
(in place order)
0.

 */
