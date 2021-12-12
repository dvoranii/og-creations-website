import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouComponent } from './thank-you.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ThankYouComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ThankYouComponent
      }
    ]),
    CommonModule
  ]
})
export class ThankYouModule { }
