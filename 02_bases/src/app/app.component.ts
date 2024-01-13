import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'BASES';
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
