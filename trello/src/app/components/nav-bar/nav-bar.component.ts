import { Component } from '@angular/core';
import { Anchor } from 'src/app/models/anchor.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  options: Anchor[] = [
    { name: 'LOG IN', to: '/login', color: '', size: 'text-[20px]' },
    { name: 'BOARDS', to: '/boards', color: '', size: 'text-[20px]' },
  ]

}
