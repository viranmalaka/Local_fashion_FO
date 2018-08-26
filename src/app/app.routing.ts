import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './client/home-page/home-page.component';
import {ClientLayoutComponent} from './client/client-layout/client-layout.component';
import {ItemListComponent} from './client/item-list/item-list.component';
import {UserCartComponent} from './client/user-cart/user-cart.component';
import {AboutUsComponent} from './client/static-pages/about-us.component';
import {CookiesPolicyComponent} from './client/static-pages/cookies-policy.component';
import {PaymentsComponent} from './client/static-pages/payments.component';
import {ReturnsComponent} from './client/static-pages/returns.component';
import {PrivacyPolicyComponent} from './client/static-pages/privacy-policy.component';
import {UserLoginComponent} from './client/user-login/user-login.component';
import {UserAccountComponent} from './client/user-account/user-account.component';
import {MyOrdersComponent} from './client/user-account/my-orders/my-orders.component';
import {MyAddressComponent} from './client/user-account/my-address/my-address.component';
import {MyWishlistComponent} from './client/user-account/my-wishlist/my-wishlist.component';
import {MyPersonalDetailsComponent} from './client/user-account/my-personal-details/my-personal-details.component';
import {CheckoutComponent} from './client/checkout/checkout.component';
import {AuthGuardService} from './common/auth-guard.service';
import {RewardsComponent} from './client/user-account/rewards/rewards.component';
import {ThemeBrowserComponent} from './client/theme-browser/theme-browser.component';
import {StoreLocationsComponent} from './client/static-pages/store-locations/store-locations.component';
import {ItemSearchComponent} from './client/item-search/item-search.component';
import {OrderSuccessComponent} from './client/checkout/order-success/order-success.component';
import {ForgetPasswordComponent} from './client/user-login/forget-password/forget-password.component';
import {FAQComponent} from './client/static-pages/faq.component';

const APP_ROUTES: Routes = [
  {
    path: '', component: ClientLayoutComponent, children: [
      {path: '', component: ThemeBrowserComponent},
      {path: 'items-list', component: ItemListComponent, data: {showThemeList: true}},
      {path: 'items-search', component: ItemSearchComponent},
      {path: 'user-cart', component: UserCartComponent},
      {path: 'user-cart/checkout', component: CheckoutComponent},
      {path: 'user-cart/checkout/success', component: OrderSuccessComponent},
      {path: 'user-login', component: UserLoginComponent},
      {path: 'user-login/forget-password', component: ForgetPasswordComponent},

      {path: 'auth/account', component: UserAccountComponent, canActivate: [AuthGuardService], children: [
          {path: '', redirectTo: 'orders', pathMatch: 'full'},
          {path: 'orders', component: MyOrdersComponent},
          {path: 'personal', component: MyPersonalDetailsComponent},
          {path: 'wishlist', component: MyWishlistComponent},
          {path: 'addresses', component: MyAddressComponent},
          {path: 'rewards', component: RewardsComponent},
        ]},

      {path: 'stores', component: StoreLocationsComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'cookies-policy', component: CookiesPolicyComponent},
      {path: 'payments', component: PaymentsComponent},
      {path: 'privacy-policy', component: PrivacyPolicyComponent},
      {path: 'returns', component: ReturnsComponent},
      {path: 'faq', component: FAQComponent},

      // {path: 'auth/facebook/callback/server', redirectTo: ''},
      // {path: '**', redirectTo: ''},
    ]
  }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
