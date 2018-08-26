import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ItemService} from '../item.service';
import {ThemeApi, UserApi} from '../../lb-services/services/custom';
import {ChatbotService} from '../chatbot.service';
import {PopUpComponent} from '../widget/pop-up/pop-up.component';
import {ChatBotWidgetComponent} from '../widget/chat-bot-widget/chat-bot-widget.component';
import {ToasterService} from 'angular2-toaster';
import {CommonService} from '../common.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {GlobalVariablesService} from '../../common/global-variables.service';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss']
})
export class ClientLayoutComponent implements OnInit, OnDestroy {
  alive = true; // for subscriptions

  @ViewChild('chatbot') private chatbot: PopUpComponent;
  @ViewChild('cbWidget') private cbWidget: ChatBotWidgetComponent;
  @ViewChild('themeListRef') private themeListRef: ElementRef;

  x = true;
  sideMenu = false;
  isAuth = false;
  showThemeList = true;
  themeOverflow = false;
  mblChat= false;

  settings = {
    show: false,
    lng: 'en',
    curr: 'usd',
  };

  constructor(private itemService: ItemService, private themeApi: ThemeApi, public userApi: UserApi,
              public cbService: ChatbotService, private toasterService: ToasterService,
              private common: CommonService, public router: Router, private translate: TranslateService,
              private global: GlobalVariablesService, private route: ActivatedRoute) {
    this.common.changeAuthCBReference((val) => {
      this.isAuth = val;
    });

    this.router.events.takeWhile(() => this.alive).subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.sideMenu = false;
      }
      // set mobile view scrolling button for theme list
      setTimeout(() => {
        if (this.themeListRef) {
          const x = this.themeListRef.nativeElement;
          this.themeOverflow = x.offsetWidth < x.scrollWidth;
        }
      }, 500);
    });


    this.settings.lng = this.global.lng;
    this.settings.curr = this.global.curr;
    console.log(this.settings);
  }

  ngOnInit() {
    this.cbService.setPopupRef(this.chatbot);
    this.cbService.setChatBotWidget(this.cbWidget);
    this.route.queryParams.take(1).subscribe(data => {
      if (data.verified) {
        this.toasterService.pop('warning', 'Congratulation', 'Account Verified');
      }
    });
  }

  logout() {
    window.location.href = '/auth/logout';
    this.userApi.logout();
    this.isAuth = false;
  }

  scrollThemeList(direction) {
    this.themeListRef.nativeElement.scrollBy({left: 100 * (direction ? -1 : 1), behavior: 'smooth'});
  }

  changeLanguage(lng) {
    this.settings.lng = lng;
    this.translate.use(lng);
    this.global.lng = lng;
  }

  changeCurrency(curr) {
    this.settings.curr = curr;
    this.global.curr = curr;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
