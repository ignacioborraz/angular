import { Component, Input } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product : Product = {
    id: 0,
    title: '',
    price: 0,
    image: '',
    description: '',
    category: ''
  }
  quantity = 0
  constructor(private storeService : StoreService) {}
  addToStore() {
    this.storeService.addToCart(this.product)
    this.quantity = this.storeService.getQuantity()
  }
}
