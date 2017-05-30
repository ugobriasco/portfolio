import { Component, OnInit, AfterViewInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {Http} from '@angular/http';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css']
})
export class PressComponent implements OnInit, AfterViewInit  {

  
  result='';
  cfg;
  private sub: any;

  constructor(
    private api: ApiService,
    private _router: Router,
    private http: Http
    ) {
    //this.http.get('./docs/config.json').subscribe(res => this.cfg = res.json());

  } 

  ngOnInit() {
    // this.api.getTweets().subscribe((res)=>{
    //       this.result = res.json().map(tweet => tweet);
    //   });
  }

  ngAfterViewInit() {
    this.sub = this._router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        (<any>window).twttr = (function (d, s, id) {
          let js: any, fjs = d.getElementsByTagName(s)[0],
              t = (<any>window).twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);

          t._e = [];
          t.ready = function (f: any) {
              t._e.push(f);
          };

          return t;
        }(document, "script", "twitter-wjs"));

        if ((<any>window).twttr.ready())
          (<any>window).twttr.widgets.load();

      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



  




}


