import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  public products: Product[] = [];
  constructor (private productsService: ProductsService) { }
  ngOnInit(): void {
    this.productsService.getProducts()
    .subscribe(data=> {
      //console.log(data);
      this.products = data
    })
  }
}
