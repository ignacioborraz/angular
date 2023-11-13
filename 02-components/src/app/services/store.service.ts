import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private store: Product[] = []
  private cart = new BehaviorSubject<Product[]>([])
  cart$ = this.cart.asObservable()
  getQuantity() {
    console.log(this.store.length);
    return this.store.length
  }
  addToCart(product: Product) {
    if (this.store.includes(product)) {
      this.store = this.store.filter(each => each.id !== product.id)
    } else {
      this.store.push(product)
    }
    this.cart.next(this.store)
  }
}
