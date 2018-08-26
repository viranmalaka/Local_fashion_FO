import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  open = false;

  @Output() done = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  go() {
    setTimeout(() => {
      //     this.router.navigate(['/themes']);
      this.done.emit('');
    }, 1000);
  }

}
