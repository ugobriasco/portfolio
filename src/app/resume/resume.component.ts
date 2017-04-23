import { Component, OnInit, AfterViewInit} from '@angular/core';
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
      this.skills = res.json().skills;
      this.cert = res.json().certificates;
  	});

  }




}
 



