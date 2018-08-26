import {TranslateService} from '@ngx-translate/core';

declare const isSafari: any;

import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {StorageBrowser, ThemeApi} from '../../lb-services';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemService} from '../item.service';
import {ItemDialogComponent} from '../item-dialog/item-dialog.component';
import {CombinationDialogComponent} from '../combination-dialog/combination-dialog.component';
import {ItemApi, UserApi, WishListDetailApi} from '../../lb-services/services/custom';
import {ToasterService} from 'angular2-toaster';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy {
  alive = true; // for subscriptions

  @Input() openCart = false;

  @ViewChild('combView', {read: ElementRef}) public combView: ElementRef;
  @ViewChild('cartView', {read: ElementRef}) public cartView: ElementRef;
  // @ViewChild('combViewFullElement') public combViewFullElement: ElementRef;

  @ViewChild('itemViewDialog') public itemViewDialog: ItemDialogComponent;
  @ViewChild('combinationDialog') public combinationDialog: CombinationDialogComponent;

  cart = false; // cart view popup showing boolean
  showCombView = false; // combination view popup showing

  listMode = 's'; // s-single, p-pare, o-onSale

  themeList = [];       // list of all themes form db with item included
  combinationList = []; // all pre defined combination list
  combinationCount = 0; // all selected combination count
  selectedItems = {};   // selected socks
  totalCost = 0;        // cost

  maxCombView = false;    // cart view and combination view conflict

  sngClick = true;       // use to detect item double click event
  userWishList = {};      // logged user wish list

  // socks pricing
  reduced = 0;
  priceAnimation = false;

  dblNotification = false;

  localSafari = false;

  collectionPopups = [
    {idList: [], itemId: 0, up: false, item: {}},
  ];

  constructor(private themeApi: ThemeApi,
              private itemService: ItemService,
              private itemApi: ItemApi,
              private storeBrowser: StorageBrowser,
              private route: ActivatedRoute,
              private userApi: UserApi,
              private toastr: ToasterService,
              public translate: TranslateService,
              private wishListApi: WishListDetailApi,
              private router: Router) {
    this.itemService.init();
  }

  ngOnInit() {
    console.log('Is Safari ', isSafari);
    this.localSafari = isSafari;

    // double tap notification in mobile mode
    const viewCount = parseInt(this.storeBrowser.get('item-list-view-count'), 10);
    if (viewCount) {
      if (viewCount < 2) {
        this.dblNotification = true; // show
      }
      this.storeBrowser.set('item-list-view-count', viewCount + 1);
    } else {
      this.storeBrowser.set('item-list-view-count', 1);
      this.dblNotification = true;
    }

    this.combinationList = [];
    this.route.queryParams.takeWhile(() => this.alive).subscribe(param => {

      // identify the list mode
      if (param.pair) {
        this.listMode = 'p'; // set to pairs
      } else if (param.pack6) {
        this.listMode = 'f'; // full pack
      } else {
        this.listMode = 's'; // default one
      }

      // any way go to play route
      if (Object.keys(param).length === 0) {
        this.router.navigate(['/items-list'], {queryParams: {play: true}});
      }


      this.themeApi.find({include: 'item'}).take(1).subscribe(res => {
        // filter
        this.collectionPopups = [];
        res.forEach((theme: any) => {
          for (let i = 0; i < theme.item.length; i++) {
            if (theme.item[i].category === 'sox-6' || theme.item[i].category === 'sox-3') {
              this.collectionPopups.push({
                idList: theme.item[i].link.split(',').map(x => {return parseInt(x)}),
                itemId: theme.item[i].id,
                up: false,
                item: theme.item[i],
              });
            }

            if (theme.item[i].category !== 'sox-1' && param.play) { // sox play
              theme.item.splice(i, 1);
              i--;
            } else if (theme.item[i].category !== 'sox-3' && param.pair) { // pairs TODO combo
              theme.item.splice(i, 1);
              i--;
            } else if (theme.item[i].category === 'sox-3' && param.pack6) { // full packs
              theme.item.splice(i, 1);
              i--;
            }
          }
        });

        this.themeList = res;
        this.collectionPopups.sort((a, b) => {
          if (a.idList.length < b.idList.length)
            return -1;
          if (a.idList.length > b.idList.length)
            return 1;
          return 0;
        });

        // select
        if (param.search) { // TODO
          this.themeList.forEach(t => {
            for (let i = 0; i < t.item.length; i++) {
              if (t.item[i].name.indexOf(param.search) === -1) {
                delete t.item[i];
              }
            }
          });
        }
        // ?view=4 show item dialog
        if (param.view) { // TODO
          try {
            const paramId = parseInt(param.view, 10);
            let found = false;
            this.themeList.forEach(theme => {
              theme.item.forEach(i => {
                if (i.id === paramId) {
                  found = true;
                  this.view(i);
                }
              });
            });
            if (!found) {
              this.toastr.pop('warning', 'Invalid Item');
            }
          } catch {
            this.toastr.pop('warning', 'Invalid Item');
          }
          // this.itemApi.findById(param.view).take(1).subscribe(i => {
        }

        // select items
        if (param.select) {
          try {
            const items = param.select.split(',');
            this.themeList.forEach(t => {
              t.item.forEach(i => {
                if(items.indexOf(i.id + '') > -1) {
                  i.selected = false;
                  this.itemService.selectItem(i);
                }
              });
            })
          } catch {
            this.toastr.pop('warning', 'Invalid Item');
          }
          this.router.navigate(['/items-list'], {queryParams: {play: true}});
        }

        // de-select items
        if (param['deselect-all']) {
          const ids = Object.keys(this.selectedItems);
          this.selectedItems = {};
          this.itemService.selectedItems = {};
          this.itemService.store();
          ids.forEach(x => {
            this.itemService.storeInServer(x);
          });
          this.router.navigate(['/items-list'], {queryParams: {play: true}});
        }
        this.initCombinations();
      });

      // ?comb=1_4 show combination view
      if (param.comb) { // TODO
        const x = param.comb.split(',');
        try {
          const theme = parseInt(x[0], 10);
          const id1 = parseInt(x[1], 10);
          const id2 = parseInt(x[2], 10);
          // if (id1 - id2 < 6 && id1 - id2 > -6) {
          this.viewComb(id1, id2, theme);
          // } else {
          // this.toastr.pop('warning', 'Invalid Combination');
          // }
        } catch (e) {
          // console.log('cancle');
          this.toastr.pop('warning', 'Invalid Combination');
        }
      }
    });

    // grab wish list if auth
    if (this.userApi.isAuthenticated()) {
      this.wishListApi.find({where: {userId: this.userApi.getCurrentToken().userId}})
        .take(1).subscribe(wl => {
        wl.forEach(w => {
          this.userWishList[w['itemId']] = true;
        });
      });
    }
  }

  // view item dialog
  view(item, autoPopup = false) { // TODO
    this.sngClick = false;
    this.itemViewDialog.trigger(item, () => {
      // after closing the dialog the cb calls, re assign the combinations and finalCost cost

      if(autoPopup && this.selectedItems[item.id]) {
        item.link.split(',').map(x => {return parseInt(x)}).forEach(r => {
          delete this.selectedItems[r];
        });
        this.toastr.pop('warning', '','Items from here are deselected but add one from sox6 or sox3')
      }

      this.getCombinationWithSelectedItems();
      this.setTotals();
      this.setActiveItems();
      let param = {};
      if (this.listMode === 'p') {
        param = {pair: true};
      } else if (this.listMode === 's') {
        param = {play: true};
      } else if (this.listMode === 'f') {
        param = {pack6: true};
      }
      this.router.navigate(['/items-list'], {queryParams: param});
    });
  }

  viewComb(id1, id2, theme) {
    // view combination dialog
    this.combinationDialog.trigger(id1, id2, theme, this.combinationList);
  }

  ngOnDestroy(): void {
  }

  smoothScroll(panel, dir) {
    if (panel === 'comb') {
      this.combView.nativeElement.scrollBy({left: 160 * (dir === 'l' ? -1 : 1), behavior: 'smooth'});
    } else if (panel === 'cart') {
      this.cartView.nativeElement.scrollBy({top: 120 * (dir === 'u' ? -1 : 1), behavior: 'smooth'});
    }
  }

  selectItem(item) {
    this.sngClick = true;
    setTimeout(() => {
      if (this.sngClick) {
        this.selectedItems = this.itemService.selectItem(item);
        if (item.selected) {
          // TODO
          this.getCombinationWithSelectedItems();
          const x = Object.keys(this.selectedItems).length;

          // pop up sox-6 dialog
          if(this.listMode === 's') {
            if(x > 2) {
              this.collectionPopups.forEach(collection => {
                let iAmIn = true;
                collection.idList.forEach(itm => {
                  iAmIn = iAmIn && this.selectedItems[itm];
                });
                if(iAmIn && !collection.up) {
                  collection.up = true;
                  this.view(collection.item, true);
                }
              });
            }
          }

          // pop up side bars according to the selected count
          if (x === 1) {
            this.cart = true;
          }
          if (x === 2) {
            this.showCombView = true;
          }
          if (x === 0) {
            this.cart = false;
            this.showCombView = false;
          }
        } else {
          // hide all related combinations.
          this.combinationList.forEach(cmb => {
            if (cmb.i1 === item.id) {
              cmb.s_i1 = false;
            }
            if (cmb.i2 === item.id) {
              cmb.s_i2 = false;
            }
          });

          if (item.category === 'sox-6') {
            this.combinationList.forEach(cmb => {
              if (cmb.theme === item.themeId) {
                cmb.s_i1 = false;
                cmb.s_i2 = false;
              }
            });
          }

          this.getCombinationWithSelectedItems();
          // re calculate combination count
          this.combinationCount = 0;
          this.combinationList.forEach(c => {
            // c.visible = c.s_i1 && c.s_i2;
            // this.combinationCount += c.s_i1 && c.s_i2 ? 1 : 0;

            let makeV = false;
            if(c.i1 === c.i2){
              if(this.selectedItems[c.i1]) {
                makeV = this.selectedItems[c.i1].quantity > 1;
              } else {
                makeV = false;
              }
            } else {
              makeV = c.s_i1 && c.s_i2;
            }
            c.visible = makeV;
            this.combinationCount += makeV ? 1 : 0;
          });
        }
        // get the finalCost cost
        this.setTotals();
      }
    }, 300);
  }

  // init combinations
  private initCombinations() {
    // empty list
    this.combinationList = [];
    // get all items with theme from server and generate all combinations
    this.themeList.forEach(t => {
      for (let i = 0; i < t.item.length - 1; i++) {
        for (let j = i; j < t.item.length; j++) {
          if (t.item[i].category === 'sox-1' && t.item[j].category === 'sox-1') {
            this.combinationList.push({
              visible: false, s_i1: false, s_i2: false, theme: t.id, i1: t.item[i].id, i2: t.item[j].id
            });
          }
        }
      }
    });
    // set the saved selected items
    this.selectedItems = this.itemService.selectedItems;

    // active view options.
    this.setActiveItems();

    // generate finalCost and combinations.
    this.setTotals(true);
    this.getCombinationWithSelectedItems();
  }

  public getCombinationWithSelectedItems() {
    this.combinationList.forEach(cmb => {
      Object.keys(this.selectedItems).forEach(x => {
        // if(this.selectedItems[x]['category'] === 'sox-1' && this.selectedItems[x]['category'] === 'sox-6'){
        if (cmb.i1 === parseInt(x, 10)) {
          cmb.s_i1 = true;
        }
        if (cmb.i2 === parseInt(x, 10)) {
          cmb.s_i2 = true;
        }
        if (this.selectedItems[x].category === 'sox-6' && this.selectedItems[x].theme === cmb.theme) {
          cmb.s_i1 = true;
          cmb.s_i2 = true;
        }
        if (this.selectedItems[x].category === 'sox-3') {
          this.selectedItems[x].link.split(',').map(x => {return parseInt(x)}).forEach(y => {
            if (cmb.i1 === y) {
              cmb.s_i1 = true;
            }
            if (cmb.i2 === y) {
              cmb.s_i2 = true;
            }
          });
        }
        // }
      });
    });

    this.combinationCount = 0;
    this.combinationList.forEach(c => {
      let makeV = false;
      if(c.i1 === c.i2){
        if(this.selectedItems[c.i1]) {
          makeV = this.selectedItems[c.i1].quantity > 1;
        } else {
          makeV = false;
        }
      } else {
        makeV = c.s_i1 && c.s_i2;
      }
      c.visible = makeV;
      this.combinationCount += makeV ? 1 : 0;
    });
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
          // console.log(result);
          this.userWishList[item.id] = true;
        });
      }
    } else {
      this.toastr.pop('warning', 'You are not logged in');
    }
  }

  // view methods
  selectedItemsKeys() {
    return Object.keys(this.selectedItems);
  }

  getTotalCount() {
    return this.itemService.getTotalCount();
  }

  // calculated the finalCost and change the item price with animation.
  setTotals(init = false) {
    const countCost = this.itemService.getTotalCost();
    this.totalCost = countCost[0];
    const newVal = countCost[1];

    if (!init && newVal > this.reduced) { // apply animation only changes
      // new ToasterConfig({timeout : 10000});
      // this.toastr.pop('warning', 'Your next sox selection price have dropped ');
      this.priceAnimation = true;
      setTimeout(() => {
        this.priceAnimation = false;
      }, 1000);
    }

    this.reduced = countCost[1];

  }

  horizontalScrolling(event) {
    if (!this.maxCombView) {
      this.combView.nativeElement.scrollBy({left: event.wheelDelta * -1.5, behavior: 'smooth'});
    }
  }

  private setActiveItems() {
    // console.log(this.selectedItems);
    this.themeList.forEach(t => {
      t.item.forEach(i => {
        i.selected = !!this.selectedItems[i.id];
      });
    });
  }

  closeSidePane(event) {
    if (['list-container', 'items', 'theme-list'].indexOf(event.target.classList[0]) !== -1) {
      this.showCombView = false;
      this.cart = false;
    }
    this.dblNotification = false;
  }
}
