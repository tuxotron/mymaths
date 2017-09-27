import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { GrowlModule }  from 'primeng/primeng';

import {MessageService} from 'primeng/components/common/messageservice';


@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GrowlModule,
    RouterModule.forRoot([
      {
        path: 'addition',
        component: AdditionComponent
      }
    ])
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
