import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public hero: string = 'SCARLET WITCH';
  public name: string = 'Wanda Maximoff';
  public age: number = 25;
  public city: string = 'Westview';
  public power: string = 'Chaos Magic';
  public upperCase: boolean = true;
  public lowerCase: boolean = true;

  public get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  lowerName(): void {
    this.upperCase = true;
    this.lowerCase = false;
    this.hero = this.hero.toLowerCase();
  }
  upperName(): void {
    this.lowerCase = true;
    this.upperCase = false;
    this.hero = this.hero.toUpperCase();
  }
}
