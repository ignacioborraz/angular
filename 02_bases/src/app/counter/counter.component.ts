import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>COUNTER COMPONENT: {{ counter }}</h3>
    <button (click)="count(-1)">-1</button>
    <button (click)="reset()">reset</button>
    <button (click)="count(+1)">+1</button>
  `,
})
export class CounterComponent {
  constructor() {}
  public counter: number = 0;
  increase(): void {
    this.counter++;
  }
  decrease(): void {
    this.counter--;
  }
  count(num: number): void {
    this.counter = this.counter + num;
  }
  reset(): void {
    this.counter = 0;
  }
}
