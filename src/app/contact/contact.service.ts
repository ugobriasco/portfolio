import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ContactService {

	cfg;

  constructor(private http: Http) { 
  	this.http.get('./app/app.config.json').subscribe(res => this.cfg = res.json());
  }

  // sendEmail(sender:string,subject:string,message:string){

  // 	if(sender && subject && message) {

  //     let headers = new Headers();
  //     headers.append("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  //     headers.append("Authorization","Basic " + this.cfg.mailgun.apiKey);

  // 		let body = "from="+ sender +"&to=" + this.cfg.mailgun.email + "&subject=" + subject + "&text=" + message;
  // 		let url = "https://api.mailgun.net/v3/" + this.cfg.mailgun.url + "/messages";

  // 		return this.http.post(url,body,{headers: headers});
  // 	}
  // }

  // send(sender: string, subject: string, message: string) {
  //   var requestHeaders = new Headers();
  //   var body = new URLSearchParams()
  //   body.append("from", sender)
  //   body.append("to", this.cfg.mailgun.email)
  //   body.append("subject", subject)
  //   body.append("html", message)
  //   requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  //   return this.http.post(
  //     "https://api:***your api secret ***@api.mailgun.net/v3/" + "***your domain***" + "/messages",
  //     body, {headers: requestHeaders})
  // }


  getEmailFrom(fromName, fromEmail, message) {
    const headers = new Headers();
    headers.append("Authorization", "Basic "+ this.cfg.mailgun.apiKey);
    headers.append("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    const recieverMail = "ugo.briasco@gmail.com";
    const subject = "error report submitted by interactive screen";
    const recieverName = "CSC SERVICE";
    const url = "https://api.mailgun.net/v3/sandbox483ba75d9caa4092a6929e08d9bd2d9a.mailgun.org/messages";
    const body = "from="+fromName+"<"+fromEmail+">&to="+recieverName+"<"+recieverMail+">&subject="+subject+"&text="+message;
    return this.http.post(url,body,{headers:headers});
  }

  // sendEmailTo(recipient: string, subject: string, message: string) {
  //   var requestHeaders = new Headers();
  //   var body = new URLSearchParams()
  //   body.append("from", '***your email***')
  //   body.append("to", recipient)
  //   body.append("subject", subject)
  //   body.append("html", message)
  //   requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  //   return this.http.post(
  //     "https://api:***your api secret ***@api.mailgun.net/v3/" + "***your domain***" + "/messages",
  //     body, {headers: requestHeaders})
  // }





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
