import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ContactService {

	cfg;

  constructor(private http: Http) { 
  	this.http.get('./app/data/config.json').subscribe(res => this.cfg = res.json());
  }


  getEmailFrom(fromName, fromEmail, message) {
    const headers = new Headers();
    headers.append("Authorization", "Basic "+ "key-d56828f431c6c6cfb2a193cb7345aed2");
    headers.append("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    const recieverMail = "ugo.briasco@gmail.com";
    const subject = "error report submitted by interactive screen";
    const recieverName = "CSC SERVICE";
    const url = "https://api.mailgun.net/v3/sandbox483ba75d9caa4092a6929e08d9bd2d9a.mailgun.org/messages";
    const body = "from="+fromName+"<"+fromEmail+">&to="+recieverName+"<"+recieverMail+">&subject="+subject+"&text="+message;
    return this.http.post(url,body,{headers:headers});
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
