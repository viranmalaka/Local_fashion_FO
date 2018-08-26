import {Component, OnInit} from '@angular/core';
import {UserApi} from '../../../lb-services/services/custom';
import {ActivatedRoute, Router} from '@angular/router';
import {ToasterService} from 'angular2-toaster';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {LoopBackAuth} from '../../../lb-services/services/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['../user-login.component.scss', './forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  email = '';
  password = '';
  confirmPass = '';
  mode = 1;

  token = '';


  constructor(private userApi: UserApi, private activeRoute: ActivatedRoute,
              private toastr: ToasterService, private route: Router, private http: HttpClient) {
    if (this.userApi.isAuthenticated()) {
      this.route.navigate(['/']);
    }
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      if (params.token) {
        this.mode = 2;
        this.token = params.token;
      }
    });
  }

  reset() {
    if (this.mode === 1) {
      this.userApi.resetPassword({email: this.email}).subscribe(data => {
        this.toastr.pop('warning', 'Password request request is sent to your email');
      }, e => {
        this.toastr.pop('error', 'Something went wrong...');
      });
    } else {
      if (this.password === this.confirmPass && this.password !== '') {

        const headers = new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded');

        const params = new HttpParams()
          .set('access_token', this.token);

        const body = new HttpParams()
          .set('newPassword', this.password);

        this.http.post(environment.apiPath + '/api/users/reset-password',
          body.toString(),
          {headers: headers, params: params}).subscribe(data => {
            this.toastr.pop('warning', 'Password is set. Please log in');
            this.route.navigate(['/user-login']);
          });
      } else {
        this.toastr.pop('warning', 'Password mismatch');
      }
    }
  }
}
