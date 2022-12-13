import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  
  @Input() studentData:any;
  @Output() studentClicked = new EventEmitter<any>();

  constructor(){

  }
  ngOnInit(): void{

  }

  ViwDataCourse(){
    this.studentClicked.emit(this.studentData)
  }


}
