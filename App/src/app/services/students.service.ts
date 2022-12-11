import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Students } from '../models/students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  public path_url = 'https://plataforma.education.city/app/web/api/index.php?action=test_get_students&code=312043';

  constructor(
    private http: HttpClient
  ) { }

  getStudents() {
    return this.http.get<Students[]>(this.path_url,{
        headers:  new HttpHeaders({
            'Cookie': 'PHPSESSID=7xbeir24jcvrii4irat3a2ku1h',
            

        })
    });
  }
}
