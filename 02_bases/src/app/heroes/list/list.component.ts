import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[] = ["Spiderman","Hulk","Thor","Ironman"]
  public deleted?: string = ""
  destroyLast():void {
    this.deleted = this.heroes.pop()
  }
}
