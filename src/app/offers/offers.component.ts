import { Component, OnInit } from '@angular/core';
import { products } from '../offers';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
	offers = products;
  filterForm;
  addForm;

  constructor(private cartServ: CartService, private formBldFilter: FormBuilder,private formBldAdd: FormBuilder) {
    this.filterForm = this.formBldFilter.group({
      dur:'',
      price:'',
      type:''
    });
    this.filterForm = this.formBldAdd.group({
      type:'',
      destination:'',
      startDate:'',
      dur:''
    });

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

  filterItems(val){}

  addToOffers(val){}
}
