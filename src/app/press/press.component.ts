import { Component, OnInit } from '@angular/core';
import { TwitterService } from 'ng2-twitter';
import { Http } from '@angular/http';

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
    private twitter: TwitterService,
    private http: Http
    ) {
    this.http.get('./app/data/config.json').subscribe(res => this.cfg = res.json());

  } 

  ngOnInit() {
  }

  ngAfterViewInit () {
            this.getHomeTimeline();
  }

  //gather ttwits
  getHomeTimeline(){  
      this.twitter.get(
          'https://api.twitter.com/1.1/statuses/user_timeline.json',
          {
            count: 10
          },
          {
            consumerKey: "6bKoszKhLCqE4WGUWlnxncGkt",
            consumerSecret: "bvaHXQDrejktH0DPi6BB2NUF0tpEncdiDsbKtyEjKFQxB2hhNN"
          },
          {
            token: "341947997-makcDnZsyDUaRDx41UrLmbV0sjxEVswvkAVFfOBn",
            tokenSecret: "dtdYN3ff6Qy1NSOPMG2rhdEms37oh5K4HLUuJTlLspAUk"
          }
      ).subscribe((res)=>{
          this.result = res.json().map(tweet => tweet);
      });
  }




}
