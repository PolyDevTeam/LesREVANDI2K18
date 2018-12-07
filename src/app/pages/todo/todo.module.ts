import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule, routedComponents } from './todo-routing.module';
import { NbInputModule, NbLayoutModule, NbListModule } from '@nebular/theme';

@NgModule({

  imports: [
    CommonModule,
    TodoRoutingModule,
    NbInputModule,
    NbLayoutModule,
    NbListModule
  ],
  declarations: [
    ...routedComponents,
  ]
})
export class TodoModule { }
