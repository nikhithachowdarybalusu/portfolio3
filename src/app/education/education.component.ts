import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query } from '@angular/animations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class EducationComponent implements OnInit {
  educationList = [
    {
      title: 'Bachelor of Science in Computer Science',
      institution: 'XYZ University',
      description: 'Focus on algorithms, data structures, and programming languages.',
      delay: '0.2s'
    },
    {
      title: 'Master of Science in Computer Science',
      institution: 'ABC Institute of Technology',
      description: 'Advanced topics in machine learning, AI, and data analysis.',
      delay: '0.5s'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
