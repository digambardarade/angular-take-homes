import { Component, OnInit } from '@angular/core';

interface User {
  uid: number;
  name: string;
  department: string;
  role: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    { uid: 1001, name: 'Alice Johnson', department: 'Engineering', role: 'Software Developer' },
    { uid: 1002, name: 'Bob Williams', department: 'Marketing', role: 'Marketing Manager' },
    { uid: 1003, name: 'Carol Davis', department: 'Human Resources', role: 'HR Specialist' },
    { uid: 1004, name: 'Daniel Brown', department: 'Finance', role: 'Financial Analyst' },
    { uid: 1005, name: 'Emma Wilson', department: 'Engineering', role: 'Senior Developer' },
    { uid: 1006, name: 'Frank Miller', department: 'Sales', role: 'Sales Representative' },
    { uid: 1007, name: 'Grace Taylor', department: 'Operations', role: 'Operations Manager' },
    { uid: 1008, name: 'Henry Anderson', department: 'Engineering', role: 'DevOps Engineer' },
    { uid: 1009, name: 'Isabella Martinez', department: 'Design', role: 'UX Designer' },
    { uid: 1010, name: 'Jack Thompson', department: 'Quality Assurance', role: 'QA Tester' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
