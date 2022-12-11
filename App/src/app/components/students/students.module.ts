import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentModule } from './student/student.module'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentModule
  ],
  exports: [
    StudentModule
  ]
})
export class StudentsModule {}
