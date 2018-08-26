import {Component, OnInit, ViewChild} from '@angular/core';
import {ThemeApi, UserApi, WishListDetailApi} from '../../lb-services/services/custom';
import {ActivatedRoute} from '@angular/router';
import {Theme} from '../../lb-services/models';
import {ToasterService} from 'angular2-toaster';
import {ItemDialogComponent} from '../item-dialog/item-dialog.component';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['../item-list/item-list.component.scss'] // item list styles are included here
})
export class ItemSearchComponent implements OnInit {
  themeList = [];
  userWishList = [];
  @ViewChild('itemViewDialog') public itemViewDialog: ItemDialogComponent;

  constructor(private themeApi: ThemeApi, private activeRoute: ActivatedRoute,
              private userApi: UserApi, private toastr: ToasterService, private wishListApi: WishListDetailApi) {
  }

  ngOnInit() {
    this.themeApi.find({include: {item: true}}).subscribe(theme => {
      this.activeRoute.queryParams.subscribe(params => {
        if (params.q && params.q !== '') {
          this.themeList = [];
          theme.forEach((t: Theme) => {
            const newTheme = {...t};
            newTheme['item'] = [];
            this.themeList.push(newTheme);
            t.item.forEach(i => {
              // console.log(t.name.toLowerCase(), params.q.toLowerCase());
              if (i.name.toLowerCase().indexOf(params.q.toLowerCase()) !== -1 ||
                i.color.toLowerCase().indexOf(params.q.toLowerCase()) !== -1 ||
                i.description.toLowerCase().indexOf(params.q.toLowerCase()) !== -1) {
                newTheme['item'].push(i);
              }
            });
          });
        }
      });
    });
    if (this.userApi.isAuthenticated()) {
      this.wishListApi.find({where: {userId: this.userApi.getCurrentToken().userId}})
        .take(1).subscribe(wl => {
        wl.forEach(w => {
          this.userWishList[w['itemId']] = true;
        });
      });
    }
  }

  addToWishList(item) {
    // TODO check list mode and add to wishlist
    if (this.userApi.isAuthenticated()) {
      if (this.userWishList[item.id]) {
        this.wishListApi.findOne({
          where:
            {userId: this.userApi.getCurrentToken().userId, itemId: item.id}
        }).take(1).subscribe(res => {
          if (res) {
            this.wishListApi.deleteById(res['id']).take(1).subscribe(res2 => {
              this.toastr.pop('warning', 'Removed from wish list');
              this.userWishList[item.id] = false;
            });
          }
        });
      } else {
        this.wishListApi.create({
          addedDate: new Date().getTime() / 1000,
          itemId: item.id,
          userId: this.userApi.getCurrentToken().userId,
        }).take(1).subscribe(result => {
          this.toastr.pop('warning', 'Added to wish list');
          console.log(result);
          this.userWishList[item.id] = true;
        });
      }
    } else {
      this.toastr.pop('warning', 'You are not logged in');
    }
  }


  view(item, autoPopup = false) { // TODO
    // this.sngClick = false;
    this.itemViewDialog.trigger(item, () => {
      // after closing the dialog the cb calls, re assign the combinations and finalCost cost

      // if(autoPopup && this.selectedItems[item.id]) {
      //   item.link.split(',').map(x => {return parseInt(x)}).forEach(r => {
      //     delete this.selectedItems[r];
      //   });
      //   this.toastr.pop('warning', '','Items from here are deselected but add one from sox6 or sox3')
      // }

      // this.getCombinationWithSelectedItems();
      // this.setTotals();
      // this.setActiveItems();
      // let param = {};
      // if (this.listMode === 'p') {
      //   param = {pair: true};
      // } else if (this.listMode === 's') {
      //   param = {play: true};
      // } else if (this.listMode === 'f') {
      //   param = {pack6: true};
      // }
      // this.router.navigate(['/items-list'], {queryParams: param});
    });
  }
}

// &&
// (t.item[i].color.indexOf(params.q) !== -1) &&
// t.item[i].description.indexOf(params.q) !== -1)
