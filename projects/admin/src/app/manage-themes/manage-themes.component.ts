import { Component, OnInit } from '@angular/core';
import {Theme} from '../../../../../src/app/lb-services/models';
import {ThemeApi} from '../../../../../src/app/lb-services/services/custom';

@Component({
  selector: 'admin-manage-themes',
  templateUrl: './manage-themes.component.html',
  styleUrls: ['./manage-themes.component.scss']
})
export class ManageThemesComponent implements OnInit {


  rows = [];
  columns = [
    {prop: 'id', name: 'ID'},
    {prop: 'name', name: 'Theme Name'},
    {prop: 'expired', name: 'Expired'},
    {prop: 'fullPackPrice', name: 'Full Pack Price'},
  ];

  selected = [];

  theme = new Theme();

  constructor(private api: ThemeApi) {
  }

  ngOnInit() {
    this.api.find().subscribe(data => {
      this.rows = data;
    });
  }

  addTheme() {
    this.api.create(this.theme).subscribe(res => {
      this.rows.push(res);
      this.rows = [...this.rows];
    });
  }

  editTheme() {
    this.api.upsert(this.theme).subscribe(res => {
      this.selected[0] = res;
      this.rows = [...this.rows];
    });
  }

  deleteTheme() {
    if (confirm('Are you sure to delete this theme ?')) {
      this.api.deleteById(this.theme.id).subscribe(res => {
        this.ngOnInit();
      });
    }
  }

  selectTheme(t) {
    this.theme = t.selected[0];
  }

}
