import {Component, OnInit} from '@angular/core';
import {ItemApi, UserApi, WishListDetailApi} from '../../../lb-services/services/custom';
import {ToasterService} from 'angular2-toaster';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-my-wishlist',
  templateUrl: './my-wishlist.component.html',
  styleUrls: ['./my-wishlist.component.scss']
})
export class MyWishlistComponent implements OnInit {

  items = [];

  constructor(private itemapi: ItemApi, private wishListApi: WishListDetailApi,
              private userApi: UserApi, private toastr: ToasterService) {
  }

  ngOnInit() {
    if (this.userApi.isAuthenticated()) {
      this.wishListApi.find({
        where: {
          userId: this.userApi.getCurrentToken().userId
        }, include: {item: true}
      }).take(1).subscribe(wli => {
        wli.forEach(wl => {
          this.items.push(wl['item']);
        });
      });
    }
  }

  remove(i) {
    if (this.userApi.isAuthenticated()) {
      this.wishListApi.findOne({
        where:
          {userId: this.userApi.getCurrentToken().userId, itemId: i.id}
      }).take(1).subscribe(res => {
        if (res) {
          this.wishListApi.deleteById(res['id']).take(1).subscribe(res2 => {
            this.toastr.pop('warning', 'Removed from wish list');
            this.items.splice(this.items.indexOf(i), 1);
          });
        }
      });
    }
  }

}
