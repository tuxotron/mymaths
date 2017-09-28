import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  score: number;
  addition: string;
  operand1: number;
  operand2: number;
  result: string;

  constructor(private messageService: MessageService) {
    this.score = 0;
    this.result = '';
  }

  ngOnInit() {
    this.addition = this.getRandomAddition();
  }

  onEnter(value: string) {

    console.log(value)

    if ((this.operand1 + this.operand2) === Number(value)) {
      this.score += 1;
      this.messageService.add({severity: 'success', summary: 'Correct!'});
    } else {
      this.messageService.add({severity: 'error', summary: 'Sorry :('});
    }

    this.addition = this.getRandomAddition();
    this.result = '';
  }

  getRandomAddition(): string {

    this.operand1 = Math.floor(Math.random() * 11);
    this.operand2 = Math.floor(Math.random() * 11);

    return this.operand1.toString() + " + " + this.operand2.toString();

  }

}
