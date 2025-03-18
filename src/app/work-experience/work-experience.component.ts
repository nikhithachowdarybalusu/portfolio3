import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
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
      position: 'Frontend Developer – Angular',
      company: 'Wipro Technologies',
      duration: 'Aug 2021 – Aug 2023',
      description: 'Developed responsive SPAs, improving user interaction for over 16 million monthly visitors by 50% through seamless API integration and enhanced front-end performance. Conducted unit testing with Jasmine and Karma, writing 100+ test cases to ensure 95% test coverage and robust application functionality.',
      link: 'https://wipro.com',
      delay: '0s'
    },
    {
      position: 'Graduate Teaching Assistant – Data Structures',
      company: 'Wichita State University',
      duration: 'Jan 2024 – May 2025',
      description: 'Led lab sessions and provided personalized support, guiding students through exercises, assignments, and complex topics to reinforce course concepts. Graded assignments, delivered constructive feedback, and conducted quiz reviews to enhance student understanding. Collaborated with professors on curriculum planning and instructional materials.',
      link: 'https://wichita.edu',
      delay: '0.2s'
    },
    {
      position: 'General Secretary – India Student Association',
      company: 'Wichita State University',
      duration: 'Jan 2024 – Feb 2025',
      description: 'Advocated for funding by presenting budget proposals to the Student Government Association (SGA) and managed official communications between students and administration. Oversaw association activities, ensuring smooth execution of events, programs, and initiatives to foster community engagement.',
      link: 'https://wichita.campuslabs.com/engage/organization/indian-student-association',
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
