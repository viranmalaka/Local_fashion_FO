import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageItemsComponent} from './manage-items/manage-items.component';
import {ManageThemesComponent} from './manage-themes/manage-themes.component';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {ManageCombinationsComponent} from './manage-combinations/manage-combinations.component';

const routes: Routes = [
  {path: '', component: AdminLoginComponent},
  {
    path: 'auth', component: AdminLayoutComponent,
    children: [
      {path: 'dashboard', component: AdminDashboardComponent},
      {path: 'items', component: ManageItemsComponent},
      {path: 'themes', component: ManageThemesComponent},
      {path: 'combinations', component: ManageCombinationsComponent},
      {path: 'users', component: ManageUsersComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
