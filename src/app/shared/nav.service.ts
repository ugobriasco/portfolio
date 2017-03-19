import { Injectable } from '@angular/core';

@Injectable()
export class NavService {

  private section:string = "aa";

  constructor() { 

  	this.section = "about";
  }

  setSection($section: string){
  	this.section = $section;
  	console.log(this.section);
  }



}
