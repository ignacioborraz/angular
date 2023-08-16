import { Component, OnChanges, SimpleChanges } from '@angular/core';

import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  user: User = { name: 'igna', lastName: 'borraz', age: 33, photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png' }
  show = true
  favorites: User[] = []
  showUsers() {
    this.show = !this.show
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  changeUser(user: User) {
    this.user = user
  }
  addToFavs(user: User) {
    if (this.favorites.includes(user)) {
      this.favorites = this.favorites.filter(each => each.name !== user.name)
    } else {
      this.favorites.push(user)
    }
    console.log(this.favorites.length);
  }
}
