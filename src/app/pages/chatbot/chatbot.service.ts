import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { botReplies, gifsLinks, imageLinks } from './bot-replies';
import { environment } from '../../../environments/environment.prod';

import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';

const httpOptions = {
    headers: new HttpHeaders({
        // 'Content-Type':  'application/json',
    })
};

export class Message {
    constructor(public content: string, public sentBy: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
    readonly client = new ApiAiClient({ accessToken: '13be70c1b5b34bfabcc550f26cc926e2'});

    constructor(private http: HttpClient) { 
    }

    loadBotReplies() {
        return botReplies;
    }
    
    reply(message: string, callback: Function) {
        let botReply: any =  this.loadBotReplies()
            .find((reply: any) => message.search(reply.regExp) !== -1);

        // if (botReply.reply.type === 'quote') {
        //     botReply.reply.quote = message;
        // }

        // if (botReply.type === 'gif') {
        //     botReply.reply.files[0].url = gifsLinks[Math.floor(Math.random() * gifsLinks.length)];
        // }

        // if (botReply.type === 'pic') {
        //     botReply.reply.files[0].url = imageLinks[Math.floor(Math.random() * imageLinks.length)];
        // }

        // if (botReply.type === 'group') {
        //     botReply.reply.files[1].url = gifsLinks[Math.floor(Math.random() * gifsLinks.length)];
        //     botReply.reply.files[2].url = imageLinks[Math.floor(Math.random() * imageLinks.length)];
        // }

        if(botReply.type === 'api') {
            this.getApiMessage(message, (result) => {
                botReply.reply.type = 'text';
                botReply.reply.files = undefined;
                botReply.reply.text = result.result.fulfillment.messages[0].speech;
                if(botReply.reply.text === 'Kamoulox') {
                    let words = message.split(' ');
                    let str = "";
                    
                    words.forEach(word => {
                        str += word + '+'    
                    });

                    // On retire le dernier +
                    str = str.substring(0, str.length -1);
                    
                    botReply.reply.type = 'file'
                    botReply.reply.text = 'Pfff tu sais même pas faire une recherche'
                    botReply.reply.files = [
                        {
                            url: 'http://lmgtfy.com/?q=' + str,
                            icon: 'nb-lightbulb'
                        }
                    ];
                }

                callback({ ...botReply.reply });
            });
        }
        else {
            botReply.reply.text = botReply.answerArray[Math.floor(Math.random() * botReply.answerArray.length)];
            callback({ ...botReply.reply });
        }
    }

    public getApiMessage(request, callback: Function) {
        this.client.textRequest(request)
               .then(res => {
                   console.log(res);
                   callback(res);
               });
    }
}
