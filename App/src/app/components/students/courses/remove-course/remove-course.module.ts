import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveCourseComponent } from './remove-course.component';



@NgModule({
  declarations: [
    RemoveCourseComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RemoveCourseComponent
  ]
})
export class RemoveCourseModule { }
