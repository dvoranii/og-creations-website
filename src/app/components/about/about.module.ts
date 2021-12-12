import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    RouterModule.forChild([
      {
        path:'',
        component:AboutComponent
      }
    ]),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AboutModule { }
