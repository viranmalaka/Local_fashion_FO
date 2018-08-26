import {Component, OnInit} from '@angular/core';
import {UserApi} from '../../../lb-services/services/custom';
import {ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import {CommonService} from '../../common.service';
import 'rxjs/add/operator/take';
import {ItemService} from '../../item.service';

@Component({
  selector: 'app-login-widget',
  templateUrl: './login-widget.component.html',
  styleUrls: ['./login-widget.component.scss']
})
export class LoginWidgetComponent implements OnInit {

  data = {
    username: '',
    password: ''
  };

  constructor(private userApi: UserApi, private toasterService: ToasterService,
              private route: Router, private common: CommonService, private itemService: ItemService) {
  }

  ngOnInit() {
  }

  login() {
    const validateEmail = (email) => {
      /* tslint:disable */
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      /* tslint:enable */
      return re.test(String(email).toLowerCase());
    };
    const request = (obj) => {
      this.userApi.login(obj).take(1).subscribe(res => {
        this.itemService.defaultSoxSize = res.user.sockSize;
        this.toasterService.pop('success', 'Welcome', 'Login Success');
        this.common.changeAuth(true);
        this.route.navigateByUrl('/auth/account');
      }, err => {
        console.log(err);
        this.toasterService.pop('error', 'Error', 'Invalid Login');
        this.data.password = '';
      });
    };

    if (this.data.username && this.data.password && this.data.username !== '' && this.data.password !== '') {
      if (validateEmail(this.data.username)) {
        request({email: this.data.username, password: this.data.password});
      } else {
        request(this.data);
        // this.toasterService.pop('error', 'Email', 'Enter a valid email');
      }
    } else {
      // error
      this.toasterService.pop('error', 'Error', 'Some Fields are missing');
    }
  }
}
