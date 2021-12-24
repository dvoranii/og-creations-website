import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/models/form.model';
import { FormSubmitService } from 'src/app/services/form-submit.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router';


@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.css',
              './recording.component.queries.css'
]
})
export class RecordingComponent implements OnInit {
  
  formGroup: FormGroup | any;
  
  form: Form = new Form();
  submitted = false;

  constructor(
    private formSubmitService: FormSubmitService,
    private emailService: EmailService, 
    private titleService:Title,
    private router:Router
    ) {

    this.titleService.setTitle("OG Creations ® - Recording")
   }

  ngOnInit(): void {
    this.formGroup = new FormGroup({  
      'name':  new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
      
    });

    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  
  saveForm(): void {
    this.formSubmitService.create(this.form).then(() => {
      this.submitted = true;
    });
    
    this.onEmailSubmit();
    this.formGroup.reset();
  }

  onEmailSubmit(){
    this.emailService.submitEmail(this.form).subscribe({
      next:(data)=> console.log('success', data),
      error: error=>console.log('fail',error)
    })
  }

}
