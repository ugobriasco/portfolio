import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
pro;
date;
  constructor(private api: ApiService) { }



    ngOnInit() {
  	this.api.getResume().subscribe((res) => {
  		this.pro = res.json().profile;
  	});

  	this.date = new Date();


  }

}