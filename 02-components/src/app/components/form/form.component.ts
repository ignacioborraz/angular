import {
  Component,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements AfterViewInit {
  user: User = {
    lastName: '',
    name: '',
    age: 0,
    photo: '',
  };
  @Output() sendTofather = new EventEmitter<User>();
  sendTo() {
    this.sendTofather.emit(this.user);
  }
  changePhoto(defaultPhoto:string) {
    this.user.photo = defaultPhoto
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: ' + this.user.name);
  }
}
