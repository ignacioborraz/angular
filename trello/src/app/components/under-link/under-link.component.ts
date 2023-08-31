import { Component, Input } from '@angular/core';
import { Link } from 'src/app/models/link.model';

@Component({
  selector: 'app-under-link',
  templateUrl: './under-link.component.html'
})
export class UnderLinkComponent {
  @Input() data: Link = { name: '', to: '', color: '', size: '' }
}
