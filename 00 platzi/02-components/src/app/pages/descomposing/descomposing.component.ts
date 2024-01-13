import { Component, EventEmitter, Output } from '@angular/core';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-descomposing',
  templateUrl: './descomposing.component.html',
  styleUrls: ['./descomposing.component.css']
})
export class DescomposingComponent {
  favourites: User[] = []
  @Output() counterFavourites = new EventEmitter<User[]>()
  addToFavs(user: User) {
    if (this.favourites.includes(user)) {
      this.favourites = this.favourites.filter(each => each.name !== user.name)
    } else {
      this.favourites.push(user)
    }
    console.log(this.favourites);
    this.counterFavourites.emit(this.favourites)
  }
}
