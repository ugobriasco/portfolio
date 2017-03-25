import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Contact } from './contact.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	public contactForm: FormGroup;
	public submitted: boolean;
	public events: any[]=[];


	public contact:any = {
		'email':'',
		'subject':'',
		'message':''
	}



  constructor(
  	private service: ContactService,
  	private _fb: FormBuilder
  	) { }

  ngOnInit() {
  	this.contactForm = this._fb.group({
  		email: ['', <any>Validators.required ],
  		subject: ['', <any>Validators.required ],
  		message: ['', <any>Validators.required ]

  	});

  }

  sendEmail(model: Contact, isValid: boolean){
  	console.log(model, isValid);
  	//return this.service.send(sender,subject,message);
  }

}
