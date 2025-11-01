import { Component, OnInit } from '@angular/core';
import { Student, students } from './students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[] = students;

  constructor() { }

  ngOnInit(): void {
  }

}
