import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {AddressApi, UserApi} from '../../../lb-services/services/custom';
import {ToasterService} from 'angular2-toaster';
import {Address} from '../../../lb-services/models';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.scss']
})
export class MyAddressComponent implements OnInit {
  address = [];
  addForm: Address = new Address();

  @ViewChild('modalBackground') private modalBackground: ElementRef;

  modal = false;
  formType = 'adding';
  makeDefault = false;

  constructor(private userApi: UserApi, private addressApi: AddressApi, private toastr: ToasterService) {
  }

  ngOnInit() {
    if (this.userApi.isAuthenticated()) {
      this.addressApi.find({where: {userId: this.userApi.getCurrentToken().userId}})
        .take(1).subscribe(address => {
          this.address = address;
          console.log(this.address);
        });
    }
  }

  backgroundClose(event) {
    if (event.target === this.modalBackground.nativeElement) {
      this.modal = false;
    }
  }

  updateAddress(add) {
    this.modal = true;
    this.formType = 'editing';
    this.addForm = add;
  }

  addNew() {
    this.modal = true;
    this.formType = 'adding';
    this.addForm.country = null;
    this.addForm.title = null;
    this.addForm.type = null;
  }

  submit() {
    if (this.formType === 'adding') {
      this.addForm.userId = parseInt(this.userApi.getCurrentToken().userId, 10);
      this.addressApi.create(this.addForm).take(1).subscribe(result => {
        this.addForm = new Address();
        this.address.push(result);
        this.toastr.pop('warning', 'Successfully added.');
        this.modal = false;
      });
    } else {
      this.addressApi.updateAttributes(this.addForm.id, this.addForm).take(1).subscribe(res => {
        this.toastr.pop('warning', 'Successfully updated.');
        this.modal = false;
        this.addForm = new Address();
      });
    }
  }

  changeCountry(e) {
    this.addForm.country = e;
  }

  deleteAddress(a) {
    if (confirm('Are you sure you want to delete this ?.')) {
      this.addressApi.deleteById(a.id).take(1).subscribe(res => {
        this.toastr.pop('warning', 'Successfully deleted.');
        this.address.splice(this.address.indexOf(a), 1);
      });
    }
  }
}
