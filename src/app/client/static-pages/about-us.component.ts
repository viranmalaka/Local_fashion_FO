declare const $: any;

import {TranslateService} from '@ngx-translate/core';
import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `
  <div class="image-list" fxLayout="column">
    <div *ngFor="let i of images">
      <img [src]="'../../../assets/images/about_us/' + i.img + (i.txt && ts.currentLang === 'it' ? '_i': '') + '.png'"
           [class.right]="i.right">
    </div>
    <p *ngIf="ts.currentLang === 'en'">
Soxplay.com brings a fresh thought, a reason to cheer, a reason to step out, a reason to know you are born different, to make a difference flare if it if you want to or 
just keep it discrete under your flares.
Make your match, your identity 
    </p>
    <p *ngIf="ts.currentLang === 'it'">
    Soxplay.com porta un nuovo pensiero, un motivo per rallegrare, una ragione per uscire, una ragione per sapere che sei nato diverso, per fare la differenza flare se si vuole o
basta tenerlo discreto sotto i tuoi bengala.
Crea la tua partita, la tua identità
    </p>
  </div>

  `,
  styles: [`
    img {
      max-width: 80%;
      display: block;
    }
    .right {
      float: right;
    }

    p {
      max-width: 80%;
      margin: 20px auto;
      font-size: 20px;
      text-align: center;
    }
  `]
})
export class AboutUsComponent implements OnInit {

  images = [
    {img: 'l7', txt: true},
    {img: 'r6', right: true},
    {img: 'r5', right: true},
    {img: 'l4', txt: true},
    {img: 'r3', right: true},
    {img: 'l2'},
    {img: 'l1', txt: true},
  ];

  @ViewChild('imgList') list;

  constructor(public ts: TranslateService) {
    // aos.init();
  }

  ngOnInit() {
    setInterval(() => {
      let h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

      let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

      console.log(percent);
    }, 1000);
  }


}
