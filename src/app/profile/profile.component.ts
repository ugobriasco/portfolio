import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  pro;
  constructor(private api: ApiService) { }



    ngOnInit() {
  	this.api.getResume().subscribe((res) => {
  		this.pro = res.json().profile;
  	});

  }

}
