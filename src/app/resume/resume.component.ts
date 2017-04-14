import { Component, OnInit} from '@angular/core';
import { ApiService } from '../shared/api.service';



@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit{

	jobs;
	edu;
  cert;
 

  skills; 

  constructor(private api: ApiService) { }

  ngOnInit() {
  	this.api.getResume().subscribe((res) => {
  		this.jobs = res.json().jobs;
  		this.edu = res.json().education;
      //this.skills = res.json().skills;
      this.cert = res.json().certificates;

      


  	});

  }

  ngAfterViewInit() {
    // Component views are initialized
    this.skills = [
        {
          "name":"html",
          "level": "90%"
        },
        {
          "name":"html",
          "level": "90%"
        }

      ];
  }

  // ngAfterViewInit() {
  //      $(document).ready(function() {
  // $('.html').css('width', '90%');
  // $('.css').css('width', '90%');
  // $('.jquery').css('width', '70%');
  // $('.javascript').css('width', '60%');
  // $('.adobe').css('width', '80%');
  // $('.wordpress').css('width', '10%');
  // $('.ui').css('width', '70%');
  // $('.rwd').css('width', '80%');
  //   }



}




