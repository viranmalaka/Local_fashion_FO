import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {ManageCombinationsComponent} from './manage-combinations/manage-combinations.component';
import {ManageItemsComponent} from './manage-items/manage-items.component';
import {ManageThemesComponent} from './manage-themes/manage-themes.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {CookieBrowser, InternalStorage, SDKBrowserModule, StorageBrowser} from '../../../../src/app/lb-services';
import {TooltipModule} from 'ngx-bootstrap';
import {FlexModule} from '@angular/flex-layout';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminLayoutComponent,
    AdminLoginComponent,
    ManageCombinationsComponent,
    ManageItemsComponent,
    ManageThemesComponent,
    ManageUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SDKBrowserModule.forRoot(),
    TooltipModule,
    FlexModule,
    NgxDatatableModule,
    FormsModule,
  ],
  providers: [StorageBrowser, InternalStorage, CookieBrowser],
  bootstrap: [AppComponent]
})
export class AppModule { }
