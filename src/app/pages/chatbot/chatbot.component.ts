import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ChatBotService } from './chatbot.service';

@Component({
  selector: 'ngx-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})

export class ChatBotComponent {
  messages: any[];

  constructor(private chatBotService: ChatBotService) {
    this.messages = [];
  }

  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'nb-compose',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: 'Vous',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });

    this.chatBotService.reply(event.message, (botReply) => {
      if (botReply) {
        setTimeout(() => { this.messages.push(botReply); }, 500);
      }
    });

    let tuESMORT = () => {
      this.chatBotService.reply('dead', (botReply) => {
        this.messages.push(botReply);
      });

      setTimeout(tuESMORT, 60000);
    };

    setTimeout(tuESMORT, 60000);
  }
}
