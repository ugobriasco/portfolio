import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams, Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TwitterService } from 'ng2-twitter';


@Injectable()
export class ApiService {

  constructor(private http: Http, private twitter: TwitterService, private jsonp: Jsonp) { }

  cfgUrl ='./docs/config.json'
  resumeUrl = './docs/resume.json';
  portfolioUrl = './docs/portfolio.json';

  getResume(){

    var a = this.http.get(this.resumeUrl);

    console.log(a);

  	return a;
  }

  getPortfolio(){
    let a = this.http.get(this.portfolioUrl);
    return a;
  }

  getTweets(){
  	return this.twitter.get(
          'https://api.twitter.com/1.1/statuses/user_timeline.json',
          {
            count: 10
          },
          {
            consumerKey: "kHig3xUC2hZzgYCsHnynnFOY7",
            consumerSecret: "NiJBQHoiK6laQvpDpMUqmdXV4RxoAQZ5R3YUljW3DAKn3p0coZ"
          },
          {
            token: "341947997-HBTkX3B33KeV2Jn8h0BbGIEGphJe5wiTi9lxlHCj",
            tokenSecret: "gsPYvYGOHljq6Tdb86XjjxXhacBE503y7325prSgtR4fG"
          }
    );
  }


//http://stackoverflow.com/questions/36510337/calling-twitter-api-from-postman-works-but-from-angular-2-app-it-doesnt

 _getTweets(){

    var _url = "https://api.twitter.com/1.1/statuses/user_timeline.json";    
    var headers = new Headers ({ 
      
      'Authorization': 'OAuth oauth_consumer_key="6bKoszKhLCqE4WGUWlnxncGkt", oauth_nonce="SyM1tCQyR5", oauth_signature="Sga8awsbZeefoID9C2KruaoeTyY%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1494883130", oauth_token="341947997-makcDnZsyDUaRDx41UrLmbV0sjxEVswvkAVFfOBn", oauth_version="1.0"'

    });
    //return this.jsonp.get(_url,{headers: headers});
    return this.http.get(_url, {headers: headers});
                     
                      
  }
 



}
