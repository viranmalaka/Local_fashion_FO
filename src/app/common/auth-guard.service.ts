import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserApi} from '../lb-services/services/custom';
import {LoopBackAuth} from '../lb-services/services/core';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public lbAuth: LoopBackAuth, private userApi: UserApi, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isActive();
  }

  // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return undefined;
  // }

  isActive(): Observable<boolean> | Promise<boolean> | boolean {
    console.log('checked');
    if (this.userApi.isAuthenticated()) {
      return (this.userApi.isAuthenticated());
    } else {
      this.userApi.logout();
      this.router.navigateByUrl('/user-login');
    }
    // this.userApi.findById(this.lbAuth.getToken().userId).subscribe((res: User) => {
    //   this.lbAuth.setUser(res);
    // });
  }
}
