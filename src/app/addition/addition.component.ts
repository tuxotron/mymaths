import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit, OnDestroy {

  sub: Subscription;
  score: number;
  addition: string;
  operand1: number;
  operand2: number;
  result: string;
  level: number;

  constructor(private messageService: MessageService, private route: ActivatedRoute) {
    this.score = 0;
    this.result = '';
  }

  ngOnInit() {

    this.sub = this.route.data.subscribe(
      v => {
        console.log(v);
        this.level = v.level;
      });

    console.log("level: " + this.level);

    this.addition = this.getRandomAddition(this.level);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onEnter(value: string) {

    console.log(value)

    if ((this.operand1 + this.operand2) === Number(value)) {
      this.score += 1;
      this.messageService.add({severity: 'success', summary: 'Correct!'});
    } else {
      this.messageService.add({severity: 'error', summary: 'Sorry :('});
    }

    this.addition = this.getRandomAddition(this.level);
    this.result = '';
  }

  getRandomAddition(topNumber: number): string {

    var ceiling1 = topNumber > 9 ? 10 : topNumber;
    this.operand1 = Math.floor(Math.random() * ceiling1);

    var ceiling2 = (topNumber - this.operand1) > 9 ? 10 : (topNumber - this.operand1);
    this.operand2 = Math.floor(Math.random() * ceiling2);

    return this.operand1.toString() + " + " + this.operand2.toString();

  }

}
