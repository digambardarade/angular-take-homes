import { Component, OnInit } from '@angular/core';
import { User } from '../../../models';
import { USERS_DATA } from '../../../data';

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
