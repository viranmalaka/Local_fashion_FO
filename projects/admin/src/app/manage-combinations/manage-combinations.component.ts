import {Component, OnInit} from '@angular/core';
import {CombinationDetails} from '../../../../../src/app/lb-services/models';
import {CombinationDetailsApi, ItemApi} from '../../../../../src/app/lb-services/services/custom';

@Component({
  selector: 'admin-manage-combinations',
  templateUrl: './manage-combinations.component.html',
  styleUrls: ['./manage-combinations.component.scss']
})
export class ManageCombinationsComponent implements OnInit {


  rows = [];
  columns = [
    {prop: 'id', name: 'ID'},
    {prop: 'id_1', name: 'Item 1'},
    {prop: 'id_2', name: 'Item 2'},
    {prop: 'fb_id', name: 'facebook'},
    {prop: 'insta_id', name: 'Instagram'},
  ];

  selected = [];

  itemIdList = [];

  combDetails = new CombinationDetails();

  constructor(private combinationApi: CombinationDetailsApi, private itemApi: ItemApi) {
  }

  ngOnInit() {
    this.combinationApi.find().subscribe(res => {
      this.rows = res;
    });
    this.itemApi.find({fields: 'id'}).subscribe(res => {
      this.itemIdList = res;
    });
  }

  addCombinationDetails() {
    this.combinationApi.create(this.combDetails).subscribe(res => {
      this.rows.push(res);
      this.rows = [...this.rows];
    });
  }

  editCombDetails() {
    this.combinationApi.upsert(this.combDetails).subscribe(res => {
      this.selected[0] = res;
      this.rows = [...this.rows];
    });
  }

  deleteCombDetials() {
    if (confirm('Are you sure to delete this theme ?')) {
      this.combinationApi.deleteById(this.combDetails.id).subscribe(res => {
        this.ngOnInit();
      });
    }
  }

  selectDetails(t) {
    this.combDetails = t.selected[0];
  }

}
