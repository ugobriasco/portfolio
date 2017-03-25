import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ContactService {

	cfg;

  constructor(private http:Http) { 
  	this.http.get('./app/app.config.json').subscribe(res => this.cfg = res.json());
  }

  public send(sender:string,subject:string,message:string){

  	if(sender && subject && message) {
  		let headers = new Headers({
  			"Content-Type": "application/x-www-form-urlencoded",
  			"Authorization":"Basic " + this.cfg.mailgun.apiKey
  		});
  		let options = new RequestOptions({headers: headers});
  		let body = "from="+ sender +"&to=" + this.cfg.mailgun.email + "&subject=" + subject + "&text" + message;
  		let url = "http://api.mailgun.net/v3/" + this.cfg.mailgun.url + "/message";

  		return this.http.post(url,body,options)
  		.map(result => result.json())
  		.do(result => console.log("RESULT: ", JSON.stringify(result)))
  		.subscribe(result => {
  			console.log("message Sent!");
  			sender ="";
  			subject="";
  			message="";
  		}, error => console.log(error));
  	}
  }


  private handleError(err){
		//super duper error handling
			let errMessage: string;
			if(err instanceof Response){
				let body 	= err.json() || '' ; //Uncaught SyntaxError: Unexpected token C in JSON at position 0
				let error 	= body.error || JSON.stringify(body);
				errMessage 	= `${err.status} - ${err.statusText || ''} ${error}`;
			}else{
				errMessage 	= err.message ? err.message : err.toString();
			}
			return Observable.throw(errMessage);
	}


}
