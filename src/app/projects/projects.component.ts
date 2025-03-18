import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    {
      "id": 1,
      "title": "Portfolio Application",
      "period": "Jan 2025 – Mar 2025",
      "description": [
        "Developed a Full-stack portfolio application using .NET (backend) and Angular (frontend), with emphasis on RESTful API integration to manage user data and content.",
        "Designed and implemented MVC architecture to ensure a scalable and maintainable application structure.",
        "Integrated SQL for database storage and applied best practices for API development using Swagger for clear documentation and streamlined API usage.",
        "Currently finalizing styling and preparing for deployment, aiming to boost profile visibility and user engagement by 50%."
      ],
      "image": "assets/images/portfolio-app.jpg",
      "link": "https://your-portfolio.com",
      "github": "https://github.com/your-portfolio-repo"
    },
    {
      "id": 2,
      "title": "Library Management System",
      "period": "Oct 2024 – Dec 2024",
      "description": [
        "Developed a Library Management System using Python, Flask, and SQLite, allowing administrators to manage books, users, book issuance, returns, and fines.",
        "Designed dynamic database structures to manage library data, ensuring efficient book and user tracking.",
        "Utilized RESTful APIs to handle user interaction and server-side operations, supporting book issuance, fines, and returns seamlessly.",
        "Implemented a user-friendly HTML/CSS front-end with optimized navigation for ease of use."
      ],
      "image": "assets/images/library-system.jpg",
      "link": "https://your-library-system.com",
      "github": "https://github.com/your-library-repo"
    },
    // Additional projects...
];

  constructor(private route: ActivatedRoute) {}

  viewProject(project: any) {
    console.log('View details for:', project.title);
    window.open(project.link, '_blank');
    // You can add more logic here to navigate to another page or show details in a modal
  }

  openProjectInNewTab(projectId: number): void {
    const projectUrl = `/project/${projectId}`;
    console.log("opening ", projectUrl);
    window.open(projectUrl, '_blank'); // Opens the URL in a new tab
  }
}
