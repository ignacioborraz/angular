import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent {
  @Input() user : User = {
    lastName: '',
    name: '',
    age: 0,
    photo: '',
  }
  show = true
  @Output() toFavs = new EventEmitter<User>()
  addToFavs(user:User) {
    this.toFavs.emit(user)
  }
  showUser() {
    this.show = !this.show
  }
}
