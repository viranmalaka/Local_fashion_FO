import {Injectable} from '@angular/core';
import {StorageBrowser, CartDetailApi, UserApi} from '../lb-services';
import 'rxjs/add/operator/take';
import {ItemApi} from '../lb-services/services/custom';

@Injectable()
export class ItemService {

  /*
  *** key => id

  theme: themeId,
  size: number
  quantity: number
  price: number,
  category

   */
  selectedItems = {};
  defaultSoxSize: number;

  constructor(private storeBrowser: StorageBrowser, private userApi: UserApi,
              private cartDetailsApi: CartDetailApi, private itemApi: ItemApi) {
    this.init();
  }

  init(cb = null) {
    // if logged in get the cart details from server
    if (this.userApi.isAuthenticated()) {
      this.userApi.getCartDetail(this.userApi.getCurrentToken().userId, {include: 'item'})
        .take(1).subscribe(cartDetails => {
        // all related cart details
        cartDetails.forEach(cd => {
          this.selectedItems[cd.itemId] = { // common data
            quantity: cd.quantity,
            size: cd.size,
            theme: cd.item.themeId,
            link: cd.item.link,
            category: cd.item.category,
            price: cd.item.price,
          };
        });
        if (cb) {
          cb();
        }
      }, error1 => {
          this.userApi.logout();
      });
    } else {
      // console.log('non auth', this.storeBrowser.get('items'));
      // not logged in, get saved cart details from the browser local storage
      const ls = this.storeBrowser.get('items');
      if (ls) {
        // console.log(new Date(new Date() - 60000) - new Date(ls.expire));
        if (new Date(+new Date() - 24000 * 3600).getTime() > new Date(ls.expire).getTime()) {
          console.log('Expire local storage');
          this.storeBrowser.remove('items');
        } else {
          this.selectedItems = ls.selItm;
        }
      }
      if (cb) {
        cb();
      }
    }
  }

  // trigger single item.
  selectItem(item) {
    if (item.selected) { // select
      item.selected = false;
      delete this.selectedItems[item.id];
    } else {               // deselect
      item.selected = true;
      this.selectedItems[item.id] = {
        theme: item.themeId,
        size: this.getDefaultSoxSize(),
        quantity: 1,
        category: item.category,
        link: item.link,
        price: item.price,
      };
    }
    this.store();
    this.storeInServer(item.id);
    return this.selectedItems;
  }

  // store in local storage
  store() {
    this.storeBrowser.set('items', {
      selItm: this.selectedItems, expire: new Date(new Date().getTime() + 3600000)
    });
  }

  storeInServer(id) {
    if (this.userApi.isAuthenticated()) {
      // check add or delete
      const filter = {
        itemId: id,
        userId: this.userApi.getCurrentToken().userId,
      };
      if (!this.selectedItems[id]) {
        // remove from server
        this.cartDetailsApi.find({where: filter}).take(1).subscribe((cd: Array<any>) => {
          if (cd.length > 0) {
            cd = cd[0];
            console.log('delete');
            this.cartDetailsApi.deleteById(cd['id']).take(1).subscribe(result => {
              console.log(result);
            });
          }
        });
      } else {
        this.cartDetailsApi.find({where: filter}).take(1).subscribe((cd: Array<any>) => {
          if (cd.length > 0) {
            cd = cd[0];
            console.log('update');
            cd['addedDate'] = new Date().getTime();
            cd['quantity'] = this.selectedItems[id].quantity;
            cd['size'] = this.selectedItems[id].size;
            this.cartDetailsApi.patchOrCreate(cd).take(1).subscribe(result => {
              console.log(result);
            });
          } else {
            console.log('create');
            const entry = {
              addedDate: new Date().getTime(),
              itemId: id,
              quantity: this.selectedItems[id].quantity,
              size: this.selectedItems[id].size,
              userId: this.userApi.getCurrentToken().userId
            };
            this.cartDetailsApi.create(entry).take(1).subscribe(result => {
              console.log(result);
            });
          }
        });
      }
    }
  }

  getTotalCost() {
    let val = 0;
    Object.keys(this.selectedItems).map(k => {return this.selectedItems[k]}).forEach(v => {
      val += v['price'] * v['quantity']; // single items
    });
    return [val, 0];
  }

  getTotalCount() {
    let val = 0;
    Object.keys(this.selectedItems).map(k => {return this.selectedItems[k]}).forEach(v => {
      if (v['category'] === 'sox-6') {
        val += 6 * v['quantity']; // for full packs
      } else if (v['category'] === 'sox-3') { // TODO comb
        val += 2 * v['quantity']; // for pairs
      } else {
        val += v['quantity']; // single items
      }
    });
    return val;
  }

  getPaypalOrderDetails(couponDiscount, cb) {
    this.itemApi.find().subscribe(allItems => {
      const list = [];
      const itemNames = {};
      allItems.forEach(i => {
        itemNames[i['id']] = i['name'];
      });
      let fullPrice = 0;
      Object.keys(this.selectedItems).forEach(i => {
        const v = this.selectedItems[i];
        const obj = {
          price: v.price * v.quantity,
          sku: i,
          currency: 'EUR',
          quantity: v.quantity
        };
        if (v['category'] === 'sox-6') {
          obj['name'] = 'SOXSIX Pack ' + v['fullpack'];
        } else {
          if (v['category'] === 'sox-3') { // TODO comb
            obj['name'] = 'Pair of ' + itemNames[v['item']];
          } else {
            obj['name'] = itemNames[i];
          }
        }
        list.push(obj);
        fullPrice += obj.price;
      });

      // coupon discount
      if (couponDiscount !== 0) {
        list.push({
          name: 'Coupon',
          price: '-' + couponDiscount.toFixed(2),
          currency: 'EUR',
          quantity: 1,
        });
      }
      cb(list);
    });
  }

  getDefaultSoxSize() {
    return this.defaultSoxSize === 0 || this.defaultSoxSize === undefined ? 1 : this.defaultSoxSize;
  }
}
