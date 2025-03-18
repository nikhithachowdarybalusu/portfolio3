import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query } from '@angular/animations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
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
      title: 'Bachelor of Technology - Computer Science Engineering',
      institution: 'Jawahrlal Nehru Technological University',
      description: 'Developed a strong foundation in computer science, covering subjects such as C, C++, DBMS, Data Structures, Data Warehousing, and Software Engineering.I graduated with a CGPA of 8.5/10, equivalent to 3.4/4.0. In addition to core technical skills, I explored areas like Data Mining, Software Testing, and Unified Modeling',
      duration: '2017-2021',
      delay: '0.2s'
    },
    {
      title: 'Master of Science - Computer Science',
      institution: 'Wichita State University',
      description: 'The coursework has covered a broad spectrum of topics, including Data Science, Algorithms, Cross-Platform Mobile App Development, and Database Management Systems. In addition to these, I have gained proficiency in technologies such as Git, Power BI, and Data Cleaning.',
      duration: '2023-2025',
      delay: '0.5s'
    }
  ];
  activeIndex: number | null = null;


  constructor() {}

  ngOnInit(): void {}

  // Toggle accordion open and close
  toggleAccordion(index: number): void {
    // If the clicked accordion is already open, close it (set activeIndex to null)
    // Else, set the activeIndex to the clicked accordion's index
    if (this.activeIndex === index) {
      this.activeIndex = null; // Close the currently open accordion
    } else {
      this.activeIndex = index; // Open the clicked accordion
    }
  }
  
}
