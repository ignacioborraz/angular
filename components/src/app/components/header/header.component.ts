import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

import { User } from 'src/app/models/user.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show = false
  handleMenu() {
    this.show = !this.show
  }
  @Input() favourites: User[] = []
  productsInCart: Product[] = []
  counter = 0
  constructor(private storeService : StoreService) { }
  ngOnInit(): void { this.storeService.cart$.subscribe(prods=>{
    this.counter = prods.length
    this.productsInCart = prods
  })}
}
