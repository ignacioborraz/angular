import { Component, Input } from '@angular/core';
import { Anchor } from 'src/app/models/anchor.model';

@Component({
  selector: 'app-under-link',
  templateUrl: './under-link.component.html'
})
export class UnderLinkComponent {
  @Input() data: Anchor = { name: '', to: '', color: '', size: '' }
}
