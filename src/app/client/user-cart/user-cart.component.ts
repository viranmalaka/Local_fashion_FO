import {Component, OnInit} from '@angular/core';
import {ItemService} from '../item.service';
import {ItemApi} from '../../lb-services';
import {ThemeApi} from '../../lb-services/services/custom';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  selectedItems = {};
  finalCost = 0;
  totalCount = 0;
  localSelList = {}; // keep details from server

  constructor(private itemService: ItemService, private itemApi: ItemApi, private themeApi: ThemeApi) {
  }

  ngOnInit() {
    this.itemService.init(() => {
      this.selectedItems = this.itemService.selectedItems;
      let selItems = Object.keys(this.selectedItems);

      this.itemApi.find({where: {id: {inq: selItems}}, include: 'theme'}).take(1).subscribe(res => {
        res.forEach(oneItem => {
          this.localSelList[oneItem['id']] = oneItem;
        });
        console.log(this.selectedItems);
      });
      this.finalCost = this.itemService.getTotalCost()[0];
      this.totalCount = this.itemService.getTotalCount();
    });
  }

  remove(item, key) {
    delete this.selectedItems[key];
    delete this.localSelList[key];
    this.itemService.store();
    this.itemService.storeInServer(item.id);

    // this.nonDiscountCost = this.itemService.getNonDiscountCost();
    this.finalCost = this.itemService.getTotalCost()[0];
    this.totalCount = this.itemService.getTotalCount();
  }

  setQty(selitem, increase) {
    if (increase) {
      this.selectedItems[selitem].quantity++;
    } else {
      if (this.selectedItems[selitem].quantity !== 1) {
        this.selectedItems[selitem].quantity--;
      }
    }
    // this.itemService.setQuantity(item, item.quantity);
    this.itemService.store();
    this.itemService.storeInServer(selitem);
    this.finalCost = this.itemService.getTotalCost()[0];
    this.totalCount = this.itemService.getTotalCount();
  }

  setSoxSize(selitem, value) {
    this.selectedItems[selitem].size = value;
    this.itemService.store();
    this.itemService.storeInServer(selitem);
  }

  getSelectedItemsKeys() {
    return Object.keys(this.selectedItems);
  }
}
