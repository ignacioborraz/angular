import { Component, EventEmitter, Output } from '@angular/core';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [
    { name: 'igna', lastName: 'borraz', age: 33, photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png' },
    { name: 'eric', lastName: 'rodriguez', age: 25, photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png' },
    { name: 'lucas', lastName: 'silva', age: 20, photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png' },
    { name: 'jose', lastName: 'lopez', age: 30, photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png' },
  ]
  @Output() toFavs = new EventEmitter<User>()
  addToFavs(user:User) {
    this.toFavs.emit(user)
    //console.log(user);
  }
}
