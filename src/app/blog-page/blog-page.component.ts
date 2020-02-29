import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
	postDate;
	creator;

  constructor() {
  	this.postDate = new Date();
  	this.creator = "our Team"
  }

  ngOnInit(): void {
  }

  showDate(){
  	var options = {
      year: "numeric",
      month: "2-digit",
      day: "numeric"
    };
    var str = this.postDate.toLocaleString('de-AT',options)

  	return str;
  }

}
