import { Component, OnInit} from '@angular/core';

import { Students } from './models/students.model';
import { StudentsService } from './services/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Asignar cursos";
  students = ["Alejandro", "Sebastian", "Miguel", "Jonathan", "Camila","David"];

  products: Students[] = [];

  constructor(
    private studentsService:  StudentsService
  ) { }

  ngOnInit(): void {
    this.studentsService.getStudents()
    .subscribe(data => {
      this.products = data;
      console.log(data)
    });

  }
}
