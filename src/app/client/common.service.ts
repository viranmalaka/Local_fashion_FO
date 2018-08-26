import {Injectable} from '@angular/core';

@Injectable()
export class CommonService {
  changeAuthCB: Function;

  constructor() {
  }

  changeAuthCBReference(cb) {
    this.changeAuthCB = cb;
  }

  changeAuth(val) {
    this.changeAuthCB(val);
  }
}
