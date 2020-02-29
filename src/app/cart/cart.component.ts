import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	itemsInCart;
	sum = 0;
  discount = false;

  constructor(private crtSrv: CartService) { }

  ngOnInit(): void {
  	this.itemsInCart = this.crtSrv.getItems();
  }

  getSum(){
  	for (var i = 0; i < this.itemsInCart.length; i++) {
  		this.sum += this.itemsInCart[i].price;
  	}
    if (this.sum >= 300) {this.discount = true;}
    return this.sum.toFixed(2);
  }
  
  getDiscount(){
    if (this.sum >= 300) {
      this.sum *= 0.9;
      return this.sum.toFixed(2);
    } else if (this.sum >= 500) {
      this.sum *= 0.8;
      return this.sum.toFixed(2);
    } else {return this.sum.toFixed(2);}
  }

  getTourDates(obj){
    var str = "";
    var start = new Date(obj.startDate);
    var finish = new Date(obj.startDate);
    finish.setDate(finish.getDate() + obj.duration);
    var options = {
      year: "numeric",
      month: "2-digit",
      day: "numeric"
    };
    str = start.toLocaleString('de-AT',options) + " - " + finish.toLocaleString('de-AT',options);
    return str;
  }

}
