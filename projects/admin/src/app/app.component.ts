import { Component } from '@angular/core';
import {LoopBackAuth} from '../../../../src/app/lb-services/services/core';

@Component({
  selector: 'admin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';

  constructor(private auth: LoopBackAuth) {

  }
}
