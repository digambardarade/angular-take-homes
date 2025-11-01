import { Component, OnInit } from '@angular/core';
import { frontendSkills } from './skills';  

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  feSkills: string[] = frontendSkills;

  constructor() { }

  ngOnInit(): void {
  }

}
