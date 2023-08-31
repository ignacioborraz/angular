import { Component, Input } from '@angular/core';
import { Social } from 'src/app/models/social.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() data: Social = { name: '', photo: '' }
}
