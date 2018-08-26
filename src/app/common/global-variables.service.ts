///<reference path="../../../node_modules/@angular/core/src/di/metadata.d.ts"/>
import {Injectable} from '@angular/core';
import {StorageBrowser} from '../lb-services';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class GlobalVariablesService {

  private _lng = 'en';
  private _curr = 'eur';
  private _open = false;

  private currencySubject = new Subject<any>();

  constructor(private storage: StorageBrowser) {
    this._lng = this.storage.get('lng') || 'en';
    this._curr = this.storage.get('curr') || 'eur';

    this.currencySubject.next(this._curr);
  }

  get lng() {
    return this._lng;
  }

  set lng(value) {
    this._lng = value;
    this.storage.set('lng', value);
  }

  get curr() {
    return this._curr;
  }

  set curr(value) {
    this._curr = value;
    this.storage.set('curr', value);
    this.currencySubject.next(value);
  }

  get open() {
    return this._open;
  }

  set open(value) {
    this._open = value;
  }

  getCurrencySubject(): Subject<any> {
    return this.currencySubject;
  }
}
