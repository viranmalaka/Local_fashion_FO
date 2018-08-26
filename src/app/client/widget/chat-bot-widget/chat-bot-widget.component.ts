import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-bot-widget',
  templateUrl: './chat-bot-widget.component.html',
  styleUrls: ['./chat-bot-widget.component.scss']
})
export class ChatBotWidgetComponent implements OnInit {

  hide = false;
  data = {
    message: 'Hi ! <br> What\'s up ?'
  };

  constructor() {
  }

  ngOnInit() {
    this.data = {
      message: 'Hi ! <br> What\'s up ?'
    };
    //
    // if ('serviceWorker' in navigator) {
    //   window.addEventListener('load', function() {
    //     navigator.serviceWorker.register('/worker.js')
    //   })
    // }
  }

  setData(d) {
    this.data = d;
  }

}
