import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams, Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TwitterService } from 'ng2-twitter';


@Injectable()
export class ApiService {

  constructor(private http: Http, private twitter: TwitterService, private jsonp: Jsonp) { }

  
  resumeUrl = './docs/resume.json';
  portfolioUrl = './docs/portfolio.json';

  getResume(){

    var a = this.http.get(this.resumeUrl);
  	return a;
  }

  getPortfolio(){
    let a = this.http.get(this.portfolioUrl);
    return a;
  }

}
