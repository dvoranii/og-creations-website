import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Form } from 'src/app/models/form.model';
import { FormSubmitService } from 'src/app/services/form-submit.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
'./home.component.queries.css']
})

export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('recordingSection', {read: ElementRef}) recordingSection: ElementRef | any;
  @ViewChild('mixingSection', {read: ElementRef}) mixingSection: ElementRef | any;
  @ViewChild('ebookSection', {read: ElementRef}) ebookSection: ElementRef | any;
  
  observer:any;

  formGroup: FormGroup | any;

  form: Form = new Form();
  submitted = false;

  constructor(private formSubmitService: FormSubmitService, private emailService: EmailService) { }

  ngOnInit(): void {

    this.intersectionObserver();

    this.formGroup = new FormGroup({  
      'name':  new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
      
    });
  }

  ngAfterViewInit(): void {
      this.observer.observe(this.recordingSection.nativeElement);
      this.observer.observe(this.mixingSection.nativeElement);
      this.observer.observe(this.ebookSection.nativeElement);
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
