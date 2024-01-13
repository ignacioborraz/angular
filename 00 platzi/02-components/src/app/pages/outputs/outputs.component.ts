import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.css']
})
export class OutputsComponent {
  user: User = { name: 'igna', lastName: 'borraz', age: 33, photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png' }
  show = true
  changeUser(user: User) {
    this.user = user
    console.log('user change!');
  }
  showUsers() {
    this.show = !this.show
  }
}
