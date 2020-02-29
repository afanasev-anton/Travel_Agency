import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	itemsCart = [];
  amount;

  constructor() {
    this.amount = 0;
  }

  addToCart(offer){
  	if (!this.itemsCart.includes(offer)) {
  		if (offer.placesFree > 0) {
        this.itemsCart.push(offer);
        offer.placesFree--;
        this.amount++;
      } else {window.alert('Sold out, sorry!');}
  	} else {window.alert('You have already booked this offer');}
  }

  getItems(){return this.itemsCart;}

  clearCart(){
  	this.itemsCart = [];
  }
  getAmount(){
    return this.amount;
  }
}
