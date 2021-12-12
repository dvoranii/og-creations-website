import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MixingComponent } from './mixing.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MixingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:MixingComponent
      }
    ]),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MixingModule { }
