import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { PRODUCTS } from "./../model/mock-product-list";
import { Product } from "./../model/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products: Product[];
  count: number = 0;
  @Output() addedToCart = new EventEmitter<Number>();
  ngOnInit() {
    this.products = PRODUCTS;
  }
  add(){
    this.count = ++this.count;
    this.addedToCart.emit(this.count);
  }
  remove(){
    this.count = --this.count;
    this.addedToCart.emit(this.count);
  }

}
