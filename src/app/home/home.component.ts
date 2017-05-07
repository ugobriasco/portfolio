import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { ApiService } from '../shared/api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	 isShrunk: boolean = false;
   pro;

  constructor(
    private zone: NgZone, 
    private api: ApiService

    ) {
    window.onscroll = () => {
      zone.run(() => {
        if(window.pageYOffset > 0) {
             this.isShrunk = true;
        } else {
             //this.isShrunk = false;
        }
      });
    }
  }

  ngOnInit() {
    this.api.getResume().subscribe((res) => {
      this.pro = res.json().profile;
    });
  }

  shrink(){
     this.isShrunk = true;
  }

 



  





}
