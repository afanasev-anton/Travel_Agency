import { Component, OnInit } from '@angular/core';
import { products } from '../offers';
import { CartService } from '../cart.service';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
	offers = products;
  types = [];

  filterForm = this.fb.group({
      dur:[''],
      price:[''],
      type:['']
    });

  addForm = this.fb.group({
      type:[''],
      destination:[''],
      startDate:[''],
      dur:['']
    });

  constructor(private cartServ: CartService, private fb: FormBuilder) {
    for (var i = 0; i < this.offers.length; i++) {
      if (!this.types.includes(this.offers[i].type)) {
        this.types.push(this.offers[i].type);
      }
    }

  }

  ngOnInit(): void {
  }

  addToCart(obj){
  	this.cartServ.addToCart(obj);
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

  getDuration(){
    var max = 0;
    for (var i = 0; i < products.length; i++) {
      if (products[i].duration > products[max].duration) {
        max = i;
      }
    }
    return products[max].duration;
  }
  getPrice(){
    var max = 0;
    for (var i = 0; i < products.length; i++) {
      if (products[i].price > products[max].price) {
        max = i;
      }
    }
    return products[max].price;
  }

  filterItems(val){
    var arr = [];
    var dur = parseInt(val.dur);
    var price = parseInt(val.price);
    var type = val.type;
    
    for (var i = 0; i < products.length; i++) {
      if (type == "all") {
        if ((products[i].duration <= dur)&&(products[i].price <= price)) {
          arr.push(products[i]);
          console.log(dur,price,type);
        }
      }else {
        if ((products[i].duration <= dur)&&(products[i].price <= price)&&(products[i].type == type)) {
          arr.push(products[i]);
          console.log(dur,price,type);
        }
      }
      
    }
    this.offers = arr;    
  }

  clearFilter(){
    this.filterForm.reset();
    this.offers = products;
  }

  addToOffers(val){
    
    this.offers.push(
      {"destination": val.destination,
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        "pic":"../../assets/img/default.jpg",
        "type": val.type,
        "startDate": val.startDate,
        "duration": val.dur,
        "price":999,
        "placesFree":1});
    this.addForm.reset();
  }
}
