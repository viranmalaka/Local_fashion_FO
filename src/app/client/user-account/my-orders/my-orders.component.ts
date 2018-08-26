import {Component, OnInit} from '@angular/core';
import {OrderApi, OrderDetailApi, UserApi} from '../../../lb-services/services/custom';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  orderList = [];
  activeItem;

  constructor(private userApi: UserApi, private orderApi: OrderApi, private orderDetailsApi: OrderDetailApi) {
  }

  ngOnInit() {
    if (this.userApi.isAuthenticated()) {
      this.orderApi.find(
        {where: {userId: this.userApi.getCurrentToken().userId}, include: {orderDetail: true}}
      ).take(1).subscribe(orders => {
        this.orderList = orders;
        this.activeMe(0);
      });
    }
  }

  activeMe(idx) {
    const o = this.orderList[idx];
    this.activeItem = idx;
    if (o && !o.orderDetails) {
      this.orderApi.getOrderDetail(o.id, {include: 'item'}).take(1).subscribe(od => {
        o.orderDetails = od;
      });
    }
  }
}
