import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <section class="w-[360px] p-2 m-2 flex flex-col justify-center items-center rounded-xl bg-gray-200">
      <h3 class="text-center text-xl">COUNTER IN COMPONENT: {{ counter }}</h3>
      <article class="flex justify-evently items-center">
        <button (click)="count(-1)" class="bg-black text-white p-2 mx-2 rounded-lg hover:bg-gray-800">-1</button>
        <button (click)="reset()" class="bg-black text-white p-2 mx-2 rounded-lg hover:bg-gray-800">reset</button>
        <button (click)="count(+1)" class="bg-black text-white p-2 mx-2 rounded-lg hover:bg-gray-800">+1</button>
      </article>
    </section>
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
