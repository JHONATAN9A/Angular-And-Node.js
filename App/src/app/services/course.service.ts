import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators'

import { Students } from '../models/students.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient
  ) { }

  getStudents() {
    return this.http.get<Students>('/app/web/api/index.php?action=test_get_students&code=312043')
      .pipe(
        map(res => {
          return res.data.ar_students
        })
      )
  }
}
