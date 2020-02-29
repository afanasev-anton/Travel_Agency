import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	amount;

  constructor(private cartSrv:CartService) { }

  ngOnInit(): void {
  	this.amount = this.cartSrv.getAmount();
  }

}
