import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Contact } from './contact.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	emailForm: FormGroup;
	messageSentSuccess: boolean;
  messageSentError: boolean;
	events: any[]=[];

  constructor(
  	private service: ContactService,
  	private _fb: FormBuilder
  	) { 

    this.emailForm = this._fb.group({
      'email':   [null, Validators.compose([Validators.required])],
      'name':    [null, Validators.required ],
      'message': [null, Validators.compose([Validators.required, Validators.minLength(10)])]
    });


  }

  ngOnInit() {}



  onSubmit(form: any) {
      this.service.postEmail(form.value.name.toString(),form.value.email.toString(),form.value.message.toString())
      .map(res => res)
      .subscribe(
        res => {},
        error => {
                  this.messageSentError = true;
                  this.emailForm.reset();
                  //setTimeout(()=>{this.messageSentError=false},3000);
                  },
        () => {
          this.messageSentSuccess=true;
          this.emailForm.reset();
          setTimeout(()=> { this.messageSentSuccess=false },3000);
         }
      );
    }





  // private emailValidator(control: FormControl): { [s: string]: boolean } {
  //   if (!control.value.match(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i)) {
  //     return {invalidEmail: true};
  //   }else{
  //     return null;
  //   }
  // }

}
