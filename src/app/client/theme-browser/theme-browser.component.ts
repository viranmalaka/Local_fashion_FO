import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {ThemeApi} from '../../lb-services/services/custom';
import { GlobalVariablesService } from '../../common/global-variables.service';

@Component({
  selector: 'app-theme-browser',
  templateUrl: './theme-browser.component.html',
  styleUrls: ['./theme-browser.component.scss']
})
export class ThemeBrowserComponent implements OnInit {
  open = true;
  // themes = [];

  tiles = [
    {img: 1, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '4,18'}},
    {img: 2, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '6,16'}},
    {img: 3, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '19,17'}},
    {img: 4, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '19,17'}},
    {img: 5, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '3,20'}},
    {img: 6, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '2,15'}},
    {img: 7, button: 'MAKE YOUR MATCH', link: '/items-list', params: {play: true}},
    {img: 8, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '3,4'}},
    {img: 9, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '6,15'}},
    {img: 10, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '16,9'}},
    {img: 11, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '1,2'}},
    {img: 12, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '18,20'}},
    {img: 13, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '16,19'}},
    {img: 14, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '2,3'}},
    {img: 15, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '17,5'}},
    {img: 16, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '6,15'}},
    {img: 17, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '6,15'}},
    {img: 18, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '1,2'}},
    {img: 19, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '1,2'}},
    {img: 20, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '18,20'}},
    {img: 21, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '18,20'}},
    {img: 22, button: 'SHOP NOW', link: '/items-list', params: {play: true, select: '18,20'}},
  ];

  sel = -1;

  constructor(private globalVar: GlobalVariablesService,
              private renderer: Renderer2, private el: ElementRef) {
    if(!this.globalVar.open) {
      this.open = false;
      this.globalVar.open = true;
    }
  }

  ngOnInit() {
    // this.themeApi.find().subscribe(t => {
    //   this.themes = t;
    // });
  }

  setHeights() {
    this.el.nativeElement.querySelectorAll('.flip-container, .back, .front').forEach(y => {
      this.renderer.setStyle(y, 'height', y.querySelector('img').height + 'px');
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setHeights();
  }
}
