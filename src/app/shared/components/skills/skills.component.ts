import { Component, OnInit } from '@angular/core';
import { FRONTEND_SKILLS } from '../../../data';  

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  feSkills: string[] = FRONTEND_SKILLS;

  constructor() { }

  ngOnInit(): void {
  }

}
