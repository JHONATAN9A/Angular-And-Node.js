import { Component, OnInit,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input() studentData = 'String';

  constructor(){

  }
  ngOnInit(): void{

  }
}
