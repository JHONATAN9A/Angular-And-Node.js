import { Component, OnInit} from '@angular/core';
import { StudentsService } from './services/students.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Asignar cursos";

  public students:Array<any> = [];
  public viewStudent:Object = {};

  constructor(
    private studentsService:  StudentsService
  ) { }

  ngOnInit(): void {
    this.studentsService.getStudents()
    .subscribe(res => {
      Object.entries(res)
        .forEach(([key, value]) => {
          this.students.push(value)
        })
    });


  }

  viewInfoModal(student: any){
    this.viewStudent = student;
  }
}
