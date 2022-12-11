import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';

import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudentComponent,
    MatCardModule
  ]
})
export class StudentModule { }
