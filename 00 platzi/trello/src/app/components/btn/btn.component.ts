import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent {
  capture_data() {
    console.log(this.user_login);
  }
}
