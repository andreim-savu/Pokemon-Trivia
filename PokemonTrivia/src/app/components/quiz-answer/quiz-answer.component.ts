import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz-answer',
  templateUrl: './quiz-answer.component.html',
  styleUrls: ['./quiz-answer.component.scss']
})
export class QuizAnswerComponent implements OnInit {

  @Input() optionText: string;
  @Input() correctAnswer: string;  
  @Input() questionAnswered: any;

  constructor() { }

  ngOnInit(): void {
  }

  isCorrect(): boolean {
    let a = ((this.optionText === this.correctAnswer) && (this.questionAnswered === true || this.questionAnswered === "true"));
    return a;
  }

  isWrong(): boolean {
    let a = ((this.optionText !== this.correctAnswer) && (this.questionAnswered === true || this.questionAnswered === "true"));
    return a;
  }
}
