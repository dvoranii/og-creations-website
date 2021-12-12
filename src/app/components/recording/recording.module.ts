import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordingComponent } from './recording.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RecordingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:RecordingComponent
      }
    ]),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecordingModule { }
