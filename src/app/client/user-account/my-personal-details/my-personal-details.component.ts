import {Component, OnInit} from '@angular/core';
import {UserApi} from '../../../lb-services/services/custom';
import {LoopBackAuth} from '../../../lb-services/services/core';
import {ToasterService} from 'angular2-toaster';
import 'rxjs/add/operator/take';
import {ItemService} from '../../item.service';

@Component({
  selector: 'app-my-personal-details',
  templateUrl: './my-personal-details.component.html',
  styleUrls: ['./my-personal-details.component.scss']
})
export class MyPersonalDetailsComponent implements OnInit {
  userDetails: any = {
    username: '',
    fullname: '',
    gender: null,
    title: null,
    contact: '',
    soxSize: null,
  };
  showUpdatePassword = false;

  passwords = {
    new: '',
    confirm: '',
    current: '',
  };

  constructor(private user: UserApi, private lbAuth: LoopBackAuth, private toastr: ToasterService,
              private itemService: ItemService) {
  }

  ngOnInit() {
    if (this.user.isAuthenticated()) {
      // this.user.find(this.user.getCurrentToken().id).subscribe(dbUser => {
      //   console.log(dbUser);
      // })
      this.userDetails = this.user.getCurrentToken().user;
    }
  }

  updateData() {
    this.user.upsertPatch(this.userDetails).take(1).subscribe(d => {
      this.itemService.defaultSoxSize = d['sockSize'];
      this.userDetails = d;
      this.lbAuth.setUser(d);
      this.toastr.pop('warning', 'Updated');
    });
  }

  updatePassword() {
    if (!this.showUpdatePassword) {
      this.showUpdatePassword = true;
    } else {
      if (this.passwords.new === this.passwords.confirm) {
        this.user.changePassword(this.passwords.current, this.passwords.new).take(1).subscribe(d => {
          console.log('ok');
          this.passwords = {
            new: '',
            current: '',
            confirm: '',
          };
          this.toastr.pop('warning', 'Password changed');
          this.showUpdatePassword = false;
        });
      } else {
        this.toastr.pop('warning', 'New password is not confirmed');
      }
    }
  }

  changeEmail() {
    this.toastr.pop('warning', 'Sorry, You cannot update the Email');
  }
}
