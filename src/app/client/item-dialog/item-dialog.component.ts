import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ItemService} from '../item.service';
import {Item} from '../../lb-services/models';
import {ItemApi} from '../../lb-services/services/custom';
import 'rxjs/add/operator/take';
import {TranslateService} from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.scss']
})
export class ItemDialogComponent implements OnInit {

  show = false;
  item;
  selectedItem;
  imgScale = 1;
  selectedImage = '';

  themeItems = [];

  resolver: Function;


  @ViewChild('modalBackground', {read: ElementRef}) public modalbackground: ElementRef;
  @ViewChild('mblScrollPane', {read: ElementRef}) public mblScrollPane: ElementRef;
  @ViewChild('scrollPane', {read: ElementRef}) public scrollPane: ElementRef;

  constructor(public itemService: ItemService, private itemApi: ItemApi,
              public transService: TranslateService) {
  }

  ngOnInit() {
  }

  trigger(item, next) {
    this.initSelectedItems(item);

    if(item.category === 'sox-1'){
      this.selectedImage = item.themeId + '/' + item.id + '_C';
    } else if (item.category === 'sox-3') {
      this.selectedImage = item.themeId + '/' + item.id + '_A';
    } else if (item.category === 'sox-6') {
      this.selectedImage = item.themeId + '/fullpack';
    }
    this.item = item;
    this.show = true;
    // this.reduced = this.itemService.getTotalCost()[1];
    // console.log(this.reduced);

    this.itemApi.find({where: {themeId: item.themeId}}).take(1).subscribe(items => {
      this.themeItems = items;
    });

    // init zooming
    setTimeout(() => {
      $('.tile').on('mousemove', function (e) {
        $(this).children('.photo').css({
          'transform-origin': ((e.pageX -
            $(this).offset().left) / $(this).width()) * 100 + '% ' +
          ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'
        });
      });
    }, 200);
    if (next) {
      this.resolver = next;
    }
    this.scroll()
  }

  addToCart(qty, size) {
    this.itemService.selectItem(this.item);
    this.initSelectedItems(this.item);

    if(this.item.selected) {
      this.selectedItem.quantity = qty;
      this.selectedItem.size = size;
    }
  }

  goToRelatedItem(item) {
    if (this.itemService.selectedItems[this.item.id]) {
      this.itemService.selectedItems[this.item.id] = this.selectedItem;
      this.itemService.store();
      this.itemService.storeInServer(this.item);
    }
    this.trigger(item, this.resolver);
  }

  setQty(dir) {
    if (!dir) {
      this.selectedItem.quantity = this.selectedItem.quantity === 1
        ? this.selectedItem.quantity : this.selectedItem.quantity - 1;
    } else {
      this.selectedItem.quantity = this.selectedItem.quantity + 1;
    }
  }

  // escClose(e) {
  //   console.log(e);
  // }

  backgroundClose(event) {
    if (event.target === this.modalbackground.nativeElement) {
      this.closeModal();
    }
  }

  closeModal() {
    this.show = false;
    if (this.itemService.selectedItems[this.item.id]) {
      this.itemService.selectedItems[this.item.id] = this.selectedItem;
      this.itemService.store();
      this.itemService.storeInServer(this.item.id);
    }
    this.resolver();
  }

  initSelectedItems(item) {
    this.selectedItem = this.itemService.selectedItems[item.id];
    if (!this.selectedItem) {
      this.selectedItem = {
        theme: item.themeId,
        size: this.itemService.getDefaultSoxSize(),
        quantity: 1,
        price: item.price,
        category: item.category
      };
    }
  }

  scroll() {
    setTimeout(() => {
      this.mblScrollPane.nativeElement.scrollTo({top: 0, behavior: 'smooth'});
      this.scrollPane.nativeElement.scrollTo({top: 0, behavior: 'smooth'});
    }, 300);
  }
}
