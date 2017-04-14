import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
profile;
	
  constructor(private api: ApiService) { }

  	

    ngOnInit() {
  	this.api.getResume().subscribe((res) => {
  		this.profile = res.json().profile;
  	});

  }

}
