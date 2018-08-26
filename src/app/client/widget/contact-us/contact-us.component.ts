import {Component, OnInit} from '@angular/core';
import {ContactMessageApi} from '../../../lb-services/services/custom';
import {ToasterService} from 'angular2-toaster';
import {ContactMessage} from '../../../lb-services/models';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  msg = '';
  email = '';

  constructor(private contactMsg: ContactMessageApi, private toastr: ToasterService) {
  }

  ngOnInit() {
  }

  submit() {
    const validateEmail = (email) => {
      /* tslint:disable */
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      /* tslint:enable */
      return re.test(String(email).toLowerCase());
    };

    if (!validateEmail(this.email)) {
      this.toastr.pop('warning', 'Invalid email');
    } else {
      if (!this.msg) {
        this.toastr.pop('warning', 'Message is empty');
      } else {
        const cm = {
          date: new Date().getTime(),
          email: this.email,
          message: this.msg
        };
        this.contactMsg.create(cm).subscribe(data => {
          this.toastr.pop('warning', 'Thank you..');
          this.msg = '';
          this.email = '';
        });
      }
    }
  }

}
