import {Component, OnInit} from '@angular/core';
import {User} from '../../lb-services/models';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemService} from '../item.service';
import {UserApi} from '../../lb-services/services/custom';
import {LoopBackAuth} from '../../lb-services/services/core';
import {CommonService} from '../common.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  profile: User;
  // img = '';

  constructor(private userApi: UserApi, private lbAuth: LoopBackAuth, private router: ActivatedRoute,
              private route: Router, private itemService: ItemService, private common: CommonService) {
    this.itemService.init();
  }

  ngOnInit() {
    this.userApi.findById(this.lbAuth.getToken().userId).take(1).subscribe((res: User) => {
      this.profile = res;
      this.lbAuth.getToken().user = res;
      this.lbAuth.setToken(this.lbAuth.getToken());
      this.itemService.defaultSoxSize = res.sockSize;
      setTimeout(() => {
        this.common.changeAuth(true);
      }, 500);
    });
  }
}
