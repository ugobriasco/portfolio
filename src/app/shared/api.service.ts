import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TwitterService } from 'ng2-twitter';

@Injectable()
export class ApiService {

  constructor(private http: Http, private twitter: TwitterService) { }

  dataUrl = './app/data/resume.json';

  getResume(){

    var a = this.http.get(this.dataUrl);

    console.log(a);

  	return a;
  }

  getTweets(){
  	return this.twitter.get(
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
    );
  }



}
