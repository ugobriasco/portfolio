import { Component, OnInit } from '@angular/core';

import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css']
})
export class PressComponent implements OnInit {

  title ="'Black box' technique may lead to more powerful #AI https://t.co/jVahjmIUZz http://www.google.com via @engadget";
  result='';
  cfg;

  constructor(
    private api: ApiService
    ) {
    //this.http.get('./app/data/config.json').subscribe(res => this.cfg = res.json());

  } 

  ngOnInit() {
    this.api.getTweets().subscribe((res)=>{
          this.result = res.json().map(tweet => tweet);
      });
  }



  




}
