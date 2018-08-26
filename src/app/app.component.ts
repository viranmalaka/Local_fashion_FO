declare const $: any;

import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IToasterConfig, ToasterConfig, ToasterService} from 'angular2-toaster';
import {ExchangeRateApi, UserApi} from './lb-services/services/custom';
import {LoopBackAuth} from './lb-services/services/core';
import {User} from './lb-services/models';
import {CommonService} from './client/common.service';
import {ItemService} from './client/item.service';
import {TranslateService} from '@ngx-translate/core';
import {GlobalVariablesService} from './common/global-variables.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';

  appConfig: IToasterConfig = new ToasterConfig({
    animation: 'flyRight',
    // newestOnTop: false,
    // toastContainerId: 1,
    timeout: 3000,
    showCloseButton: true,
    preventDuplicates: true,
    // titleClass: 'title-1'
  });

  constructor(public lbAuth: LoopBackAuth, private userApi: UserApi, private common: CommonService,
              private itemService: ItemService, translate: TranslateService, private ex: ExchangeRateApi,
              private global: GlobalVariablesService) {

    if (this.lbAuth.getToken().userId) { // TODO check ttl
      this.userApi.findById(this.lbAuth.getToken().userId).take(1).subscribe((res: User) => {
        this.lbAuth.setUser(res);
        this.common.changeAuth(this.userApi.isAuthenticated());
        this.itemService.defaultSoxSize = res.sockSize;
      }, error1 => {
        this.userApi.logout();
      });
    }
    this.itemService.init();

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.global.lng || 'en');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // window.addEventListener('load',function() {
    // setTimeout(function () {
    //   window.scrollTo(0, 1);
    //   console.log('scrolled');
    // }, 0);
  }
}
