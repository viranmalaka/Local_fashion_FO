import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';


import {AppComponent} from './app.component';
import {ClientLayoutComponent} from './client/client-layout/client-layout.component';
import {HomePageComponent} from './client/home-page/home-page.component';
import {Routing} from './app.routing';
import {LoginWidgetComponent} from './client/widget/login-widget/login-widget.component';
import {LocationWidgetComponent} from './client/widget/location-widget/location-widget.component';
import {SearchWidgetComponent} from './client/widget/search-widget/search-widget.component';
import {ChatBotWidgetComponent} from './client/widget/chat-bot-widget/chat-bot-widget.component';
import {PopUpComponent} from './client/widget/pop-up/pop-up.component';
import {ItemListComponent} from './client/item-list/item-list.component';
import {SDKBrowserModule, StorageBrowser} from './lb-services';
import {ItemService} from './client/item.service';
import {InternalStorage} from './lb-services/storage/storage.swaps';
import {CookieBrowser} from './lb-services/storage/cookie.browser';
import {ItemDialogComponent} from './client/item-dialog/item-dialog.component';
import {FormsModule} from '@angular/forms';
import {CombinationDialogComponent} from './client/combination-dialog/combination-dialog.component';
import {UserCartComponent} from './client/user-cart/user-cart.component';
import {AboutUsComponent} from './client/static-pages/about-us.component';
import {CookiesPolicyComponent} from './client/static-pages/cookies-policy.component';
import {PaymentsComponent} from './client/static-pages/payments.component';
import {PrivacyPolicyComponent} from './client/static-pages/privacy-policy.component';
import {ReturnsComponent} from './client/static-pages/returns.component';
import {UserLoginComponent} from './client/user-login/user-login.component';
import {ChatbotService} from './client/chatbot.service';
import {UserAccountComponent} from './client/user-account/user-account.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule } from 'angular2-toaster';
import {CommonService} from './client/common.service';
import {MyOrdersComponent} from './client/user-account/my-orders/my-orders.component';
import {MyWishlistComponent} from './client/user-account/my-wishlist/my-wishlist.component';
import {MyPersonalDetailsComponent} from './client/user-account/my-personal-details/my-personal-details.component';
import {MyAddressComponent} from './client/user-account/my-address/my-address.component';
import {Ng2FabSpeedDialModule} from 'ng2-fab-speed-dial';
import {CheckoutComponent} from './client/checkout/checkout.component';
import {CountrySelectComponent} from './common/country-select/country-select.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CurrencyChangePipe } from './common/currency-change.pipe';
import {GlobalVariablesService} from './common/global-variables.service';
import {PinchZoomComponent} from 'ngx-pinch-zoom';
import {AuthGuardService} from './common/auth-guard.service';
import { RewardsComponent } from './client/user-account/rewards/rewards.component';
import { LandingPageComponent } from './client/landing-page/landing-page.component';
import { ThemeBrowserComponent } from './client/theme-browser/theme-browser.component';
import {StoreLocationsComponent} from './client/static-pages/store-locations/store-locations.component';
import { ContactUsComponent } from './client/widget/contact-us/contact-us.component';
import { ItemSearchComponent } from './client/item-search/item-search.component';
import { OrderSuccessComponent } from './client/checkout/order-success/order-success.component';
import { ForgetPasswordComponent } from './client/user-login/forget-password/forget-password.component';
import {FAQComponent} from './client/static-pages/faq.component';
import {NgxMasonryModule} from 'ngx-masonry';
import {AnimateOnScrollModule} from 'ng2-animate-on-scroll';


@NgModule({
  declarations: [
    AppComponent,
    ClientLayoutComponent,
    HomePageComponent,
    LoginWidgetComponent,
    LocationWidgetComponent,
    SearchWidgetComponent,
    ChatBotWidgetComponent,
    PopUpComponent,
    ItemListComponent,
    ItemDialogComponent,
    CombinationDialogComponent,
    UserCartComponent,
    AboutUsComponent,
    CookiesPolicyComponent,
    PaymentsComponent,
    PrivacyPolicyComponent,
    ReturnsComponent,
    UserLoginComponent,
    UserAccountComponent,
    MyOrdersComponent,
    MyWishlistComponent,
    MyPersonalDetailsComponent,
    MyAddressComponent,
    CheckoutComponent,
    CountrySelectComponent,
    CurrencyChangePipe,
    PinchZoomComponent,
    RewardsComponent,
    LandingPageComponent,
    ThemeBrowserComponent,
    StoreLocationsComponent,
    ContactUsComponent,
    ItemSearchComponent,
    OrderSuccessComponent,
    ForgetPasswordComponent,
    FAQComponent,
  ],
  imports: [
    BrowserModule,
    Routing,
    FlexLayoutModule,
    FormsModule,
    SDKBrowserModule.forRoot({
      provide: StorageBrowser,
      useClass: StorageBrowser
    }),
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    Ng2FabSpeedDialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxMasonryModule,
    AnimateOnScrollModule.forRoot(),
  ],
  providers: [
    ItemService,
    ChatbotService,
    StorageBrowser,
    InternalStorage,
    CookieBrowser,
    CommonService,
    GlobalVariablesService,
    AuthGuardService,
    CurrencyChangePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
