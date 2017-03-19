import { Injectable } from '@angular/core';
import { Http , Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/subject';

@Injectable()
export class LinkedinService {

	private api_url:string = 'https://api.linkedin.com/v1/people/~?format=json';


  	constructor(private http: Http) { 

  	}

  	getProfile(): Observable<Object>{
  		return this.http.get(this.api_url)
  		.map(res => res.json())
  		.catch(this.handleError);
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



