import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form } from 'src/app/models/form.model';
import { FormSubmitService } from 'src/app/services/form-submit.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', './contact.component.queries.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

  formGroup: FormGroup | any;

  form: Form = new Form();
  submitted = false;
  errorMsg = '';

  @ViewChild('formSection', {read: ElementRef}) formSection: ElementRef | any;
  observer:any;

  constructor(
    private formSubmitService: FormSubmitService, 
    private emailService: EmailService, 
    private titleService:Title
    
    ) {
    this.titleService.setTitle("OG Creations ® - Contact")
   }

  ngOnInit(): void {
    this.intersectionObserver();

    this.formGroup = new FormGroup({  
      'name':  new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      "phone": new FormControl(null,[Validators.required, Validators.pattern("\\(?\\d{3}\\)?.?\\d{3}.?\\d{4}")])
      
    });

  }

  ngAfterViewInit(): void {
    this.observer.observe(this.formSection.nativeElement);
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
      error: (error)=>this.errorMsg = error.statusText
    })
  }

  intersectionObserver(){
    let options = {
      root: null,
      rootMargin:'0px',
      threshold:0
    }

    this.observer = new IntersectionObserver((entries, _observer) =>{
      entries.forEach(entry => {

        if(entry.intersectionRatio > 0){
          entry.target.classList.add('animate');
          
        }else{
          entry.target.classList.remove('animate');   
        }
            
      })
    }, options)
  }

}
