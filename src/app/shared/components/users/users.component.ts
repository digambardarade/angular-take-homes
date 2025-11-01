import { Component, OnInit } from '@angular/core';
import { User, USERS_DATA } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = USERS_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
