import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss']
})
export class CountrySelectComponent implements OnInit {

  @Input() country = 'IT';
  @Output() update = new EventEmitter<any>();
  @Input() disabled = false;

  constructor() {
  }

  ngOnInit() {
  }

  updateFn(e) {
    this.update.emit(this.country);
  }

}
