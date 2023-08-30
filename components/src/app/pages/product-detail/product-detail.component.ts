import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Location } from '@angular/common';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  constructor (
    private storeService: StoreService,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
  ) { }
  product : Product = {id:0,title:'',price:0,description:'',category:'',image:''}
  quantity : number = 0
  ngOnInit(): void { this.route.paramMap
    .pipe(switchMap(params=> this.productsService.getOneProduct(params.get('id'))))
    .subscribe(data=> this.product = data)
  }
  addToStore() {
    this.storeService.addToCart(this.product)
    this.quantity = this.storeService.getQuantity()
  }
  toBack() {
    this.location.back()
  }
}
