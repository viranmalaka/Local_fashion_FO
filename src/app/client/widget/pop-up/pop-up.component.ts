import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  showPop: boolean;
  loggedInUser = {};

  @Input() icon;
  @Input() disable = false;
  @Input() mbl = false;

  @Input() loginPop = false;
  @Input() loggedIn = false;
  @Input() chat = false;


  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.showPop && !this.eRef.nativeElement.contains(event.target)) {
      this.showPop = false;
    }
  }

  constructor(private eRef: ElementRef, private router: Router) {
  }

  ngOnInit() {
    // this.routerClose();
  }

  routerClose() {
    this.router.events.takeWhile(() => this.showPop).subscribe(val => {
      if (val instanceof NavigationEnd) {
        setTimeout(() => {
          this.showPop = false;
        }, 120);
      }
    });
  }

  trigger() {
    // to prevent HostListener action
    setTimeout(() => {
      this.showPop = !this.disable;
      if (this.showPop) {
        this.routerClose();
      }
    }, 100);
  }

  goToMyAccount() {
    this.router.navigate(['auth', 'account']);
  }
}
