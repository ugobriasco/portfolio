import { Injectable } from '@angular/core';

@Injectable()
export class NavService {

  private section:string = "home";

  constructor() { 
  }

  setSection($section: string){
  	this.section = $section;
  	console.log(this.section);
  }



 



}
