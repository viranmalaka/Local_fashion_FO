import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.scss']
})
export class SearchWidgetComponent implements OnInit {
  q = '';
  constructor() {
  }

  ngOnInit() {
  }

}
