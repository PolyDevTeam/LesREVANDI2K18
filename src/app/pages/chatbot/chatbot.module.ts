import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { ChatbotRoutingModule, routedComponents } from './chatbot-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ChatbotRoutingModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ChatBotModule { }