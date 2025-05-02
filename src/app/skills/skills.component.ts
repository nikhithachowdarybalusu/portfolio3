import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillsList = [
    {
      category: 'Languages',
      icon: 'fas fa-laptop-code',
      skills: ['Typescript', 'JavaScript', 'Python', 'SQL', 'C#']
    },
    {
      category: 'Frameworks',
      icon: 'fas fa-cogs',
      skills: ['Angular', 'Flask', 'Pandas', '.NET', '.NET MAUI', 'MVC Architecture', 'Jasmine', 'Karma']
    },
    {
      category: 'Databases & Tools',
      icon: 'fas fa-database',
      skills: ['MySQL', 'SQLite', 'Swagger', 'Postman', 'Git', 'GitHub', 'Azure Web API']
    },
    {
      category: 'Others',
      icon: 'fas fa-plug',
      skills: ['RESTful API Integration', 'API Development', 'Power BI Dashboard', 'Object-Oriented Programming']
    },
    {
      category: 'Communication & Soft Skills',
      icon: 'fas fa-users',
      skills: ['Event Planning', 'Team Leadership', 'Public Speaking', 'Cross-functional Collaboration']
    }
  ];
}
