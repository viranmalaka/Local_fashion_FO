import { Component, OnInit } from '@angular/core';
import {StoresApi} from '../../../lb-services/services/custom';

@Component({
  selector: 'app-location-widget',
  templateUrl: './location-widget.component.html',
  styleUrls: ['./location-widget.component.scss']
})
export class LocationWidgetComponent implements OnInit {

  lst = [];
  constructor(private storeApi: StoresApi) { }

  ngOnInit() {
    this.storeApi.find().subscribe(data => {
      this.lst = data;
    });
  }

}
