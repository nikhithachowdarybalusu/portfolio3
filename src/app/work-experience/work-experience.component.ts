import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger('100ms', [
            animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class WorkExperienceComponent implements OnInit {

  workExperience = [
    {
      position: 'Software Developer',
      company: 'Wipro Technologies',
      duration: 'March 2020 - Present',
      description: 'Developed front-end applications using Angular, integrated APIs, and performed unit testing.',
      link: 'https://wipro.com',
      delay: '0s'
    },
    {
      position: 'Angular Developer',
      company: 'XYZ Solutions',
      duration: 'June 2018 - February 2020',
      description: 'Led front-end development projects, ensuring a responsive design and smooth user experiences.',
      link: 'https://xyzsolutions.com',
      delay: '0.2s'
    },
    {
      position: 'Intern, Full Stack Developer',
      company: 'ABC Technologies',
      duration: 'July 2017 - May 2018',
      description: 'Contributed to both front-end and back-end tasks, learning key aspects of web development.',
      link: 'https://abctechnologies.com',
      delay: '0.4s'
    }
    // Add more work experience as needed
  ];

  constructor() { }

  ngOnInit(): void { }

  viewExperience(experience: any) {
    console.log('View details for:', experience.position);
    window.open(experience.link, '_blank');
    // You can add more logic here to navigate to another page or show details in a modal
  }
}
