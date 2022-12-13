import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentModule } from './student/student.module';
import { InfoModalModule } from './info-modal/info-modal.module';
import { AddCourseModule } from './courses/add-course/add-course.module';
import { RemoveCourseModule } from './courses/remove-course/remove-course.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    StudentModule,
    InfoModalModule,
    RemoveCourseModule,
    AddCourseModule

  ],
  exports: [
    StudentModule,
    InfoModalModule,
    RemoveCourseModule,
    AddCourseModule
  ]
})
export class StudentsModule {}
