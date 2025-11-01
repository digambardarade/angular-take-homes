import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models';
import { STUDENTS_DATA } from '../../../data';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[] = STUDENTS_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
