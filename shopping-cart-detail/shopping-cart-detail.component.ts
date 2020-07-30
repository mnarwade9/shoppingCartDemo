import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-detail',
  templateUrl: './shopping-cart-detail.component.html',
  styleUrls: ['./shopping-cart-detail.component.css']
})
export class ShoppingCartDetailComponent implements OnInit {
  cartcount: Number;
  
  ngOnInit() {
    this.cartcount = 0;
  }
  onAdd(count:Number){
    if(count >= 0)
      this.cartcount = count;
  }
}
