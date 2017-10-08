import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { GrowlModule }  from 'primeng/primeng';

import {MessageService} from 'primeng/components/common/messageservice';
import { SubtractionComponent } from './subtraction/subtraction.component';


@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    SubtractionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GrowlModule,
    RouterModule.forRoot([
      {path: '4A', component: AdditionComponent, data: {level: '4'}},
      {path: '5A',component: AdditionComponent, data: {level: '5'}},
      {path: '6A',component: AdditionComponent,data: {level: '6'}},
      {path: '7A',component: AdditionComponent,data: {level: '7'}},
      {path: '8A',component: AdditionComponent,data: {level: '8'}},
      {path: '9A',component: AdditionComponent,data: {level: '9'}},
      {path: '10A',component: AdditionComponent,data: {level: '10'}},
      {path: '11A',component: AdditionComponent,data: {level: '11'}},
      {path: '12A',component: AdditionComponent,data: {level: '12'}},
      {path: '13A',component: AdditionComponent,data: {level: '13'}},
      {path: '14A',component: AdditionComponent,data: {level: '14'}},
      {path: '15A',component: AdditionComponent,data: {level: '15'}},
      {path: '16A',component: AdditionComponent,data: {level: '16'}},
      {path: '17A',component: AdditionComponent,data: {level: '17'}},
      {path: '18A',component: AdditionComponent,data: {level: '18'}},

      {path: '4B', component: SubtractionComponent, data: {level: '4'}},
      {path: '5B',component: SubtractionComponent, data: {level: '5'}},
      {path: '6B',component: SubtractionComponent,data: {level: '6'}},
      {path: '7B',component: SubtractionComponent,data: {level: '7'}},
      {path: '8B',component: SubtractionComponent,data: {level: '8'}},
      {path: '9B',component: SubtractionComponent,data: {level: '9'}},
      {path: '10B',component: SubtractionComponent,data: {level: '10'}},
      {path: '11B',component: SubtractionComponent,data: {level: '11'}},
      {path: '12B',component: SubtractionComponent,data: {level: '12'}},
      {path: '13B',component: SubtractionComponent,data: {level: '13'}},
      {path: '14B',component: SubtractionComponent,data: {level: '14'}},
      {path: '15B',component: SubtractionComponent,data: {level: '15'}},
      {path: '16B',component: SubtractionComponent,data: {level: '16'}},
      {path: '17B',component: SubtractionComponent,data: {level: '17'}},
      {path: '18B',component: SubtractionComponent,data: {level: '18'}},
    ])
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
