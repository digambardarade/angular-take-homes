import { Component, OnInit } from '@angular/core';
import { Person, PERSONS_DATA } from './persons';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  persons: Person[] = PERSONS_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
