import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ContactService {

	cfg;

  constructor(private http: Http) { 
  	this.http.get('./app/data/config.json').subscribe(res => this.cfg = res.json());
  }

    private _contactUrl = './assets/inc/email.php';

 
    postEmail(name: String, email: String, message: String): Observable<string>{
      let body = `name=${name}&email=${email}&message=${message}`;
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options = new RequestOptions({ headers: headers });
   
      return this.http.post(this._contactUrl, body, options)
      .catch(this.handleError)
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
