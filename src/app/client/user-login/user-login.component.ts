import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserApi} from '../../lb-services/services/custom';
import {ActivatedRoute, Router} from '@angular/router';
import {ChatbotService} from '../chatbot.service';
import {ToasterService} from 'angular2-toaster';
import {CommonService} from '../common.service';
import {LoopBackAuth} from '../../lb-services/services/core';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeWhile';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit, OnDestroy {
  alive = true; // for subscribe

  user = {
    username: '',
    password: '',
    fullname: '',
    email: '',
    confirm: '',
  };
  signupInputs = false;

  constructor(private userApi: UserApi, private route: Router, private activeRoute: ActivatedRoute, private cbService: ChatbotService,
              private toasterService: ToasterService, private common: CommonService,
              private lbAuth: LoopBackAuth, private itemService: ItemService) {
  }

  ngOnInit() {
    this.activeRoute.queryParams.takeWhile(() => this.alive).subscribe(params => {
      if (params.signup) {
        this.signupInputs = true;
      }
      if (params.verifyemail) {
        this.toasterService.pop('warning', 'Your email is verified successfully', 'Please log in');
      }

      if (params.fb_at) {
        const at = JSON.parse(params.fb_at);
        this.lbAuth.setToken(at);
        this.lbAuth.setRememberMe(true);
        this.lbAuth.save();
        this.route.navigateByUrl('/auth/account');
      }
      if (params.gg_at) {
        const at = JSON.parse(params.gg_at);
        this.lbAuth.setToken(at);
        this.lbAuth.setRememberMe(true);
        this.lbAuth.save();
        this.route.navigateByUrl('/auth/account');
      }
    });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  login() {
    const validateEmail = (email) => {
      /* tslint:disable */
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      /* tslint:enable */
      return re.test(String(email).toLowerCase());
    };
    const request = (obj) => {
      obj['ttl'] = 60 * 60 * 24; // one day
      this.userApi.login(obj).take(1).subscribe(res => {
        this.itemService.defaultSoxSize = res.user.soxSize;
        this.toasterService.pop('success', 'Welcome', 'Login Success');
        this.common.changeAuth(true);
        this.route.navigateByUrl('/auth/account');
      }, err => {
        console.log(err);
        this.toasterService.pop('error', 'Error', 'Invalid Login');
        this.user.password = '';
      });
    };

    if (this.signupInputs) {
      this.signupInputs = false;
    } else {
      if (this.user.username && this.user.password && this.user.username !== '' && this.user.password !== '') {
        if (validateEmail(this.user.username)) {
          request({email: this.user.username, password: this.user.password});
        } else {
          request(this.user);
          // this.toasterService.pop('error', 'Email', 'Enter a valid email');
        }
      } else {
        // error
        this.toasterService.pop('error', 'Error', 'Some Fields are missing');
      }
    }
  }

  signup() {
    if (!this.signupInputs) {
      this.signupInputs = true;
    } else {
      this.user['accountType'] = 'client';
      this.toasterService.pop('warning', 'Processing...');
      this.userApi.create(this.user).take(1).subscribe(res => {
        if (res['success']) {
          this.user = {
            username: '',
            password: '',
            fullname: '',
            email: '',
            confirm: '',
          };
          this.toasterService.pop('warning', 'You successfully signup',
            'check your email inbox to verify the account');
          // this.route.navigateByUrl('/signup/success');
        }
      }, error1 => {
        console.log(error1);
        this.toasterService.pop('error', 'Error');
      });
    }
  }

}
