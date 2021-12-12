import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioComponent } from './studio.component';
import { RouterModule } from '@angular/router';
import { GalleryModule } from 'ng-gallery';



@NgModule({
  declarations: [
    StudioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component:StudioComponent
    }]),
    GalleryModule
  ]
})
export class StudioModule { }
