import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public hero: string = "SCARLET WITCH"
  public name: string = "Wanda Maximoff"
  public age: number = 25
  public city: string = "Westview"
  public power: string = "Chaos Magic"
}
