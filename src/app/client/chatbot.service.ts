import {Injectable} from '@angular/core';
import {PopUpComponent} from './widget/pop-up/pop-up.component';
import {ChatBotWidgetComponent} from './widget/chat-bot-widget/chat-bot-widget.component';

@Injectable()
export class ChatbotService {
  cbPopup: PopUpComponent;
  cbWidget: ChatBotWidgetComponent;

  constructor() {
  }

  setPopupRef(cb: PopUpComponent) {
    this.cbPopup = cb;
  }

  setChatBotWidget(cb: ChatBotWidgetComponent) {
    this.cbWidget = cb;
  }

  showChatbot(params) {
    if (this.cbPopup) {
      this.cbPopup.trigger();
      this.cbWidget.setData(params);
    }
  }
}
