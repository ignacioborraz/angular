import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Input() favourites : User[] = []
  changeFavourites(users: User[]) {
    this.favourites = users
  }
}
