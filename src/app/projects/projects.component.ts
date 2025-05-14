import { Component, ElementRef, Renderer2, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
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
    "image": "assets/portfolio-image.png",
    "link": "https://yourportfolioapp.com",
    "github": "https://github.com/yourgithub/portfolio-app"
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
    "image": "assets/library-management-system-image.png",
    "link": "https://librarymanagementsystem.com",
    "github": "https://github.com/yourgithub/library-management-system"
  },
  {
    "id": 3,
    "title": "Predictive Modelling & Data Analysis",
    "period": "Mar 2024 – May 2024",
    "description": [
      "Developed a regression model using XGBoost, evaluating accuracy through R-squared, MSE, and RMSE metrics.",
      "Conducted Exploratory Data Analysis (EDA) with Pandas, Seaborn, and Matplotlib to visualize data patterns and feature significance.",
      "Executed data preprocessing tasks including handling missing values, removing duplicates, and feature selection for model optimization."
    ],
    "image": "assets/predictive-modelling-image.jpg",
    "link": "https://predictivemodelling.com",
    "github": "https://github.com/yourgithub/predictive-modelling"
  },
  {
    "id": 4,
    "title": "My Recipe Book",
    "period": "Nov 2023 – Jan 2024",
    "description": [
      "Developed a cross-platform recipe app using .NET MAUI and C#, implementing dynamic recipe browsing with horizontal scrolling and tabbed layouts.",
      "Integrated APIs for real-time data fetching and handled navigation for seamless user experience.",
      "Incorporated YouTube video links within recipes to enhance user engagement and content interactivity."
    ],
    "image": "assets/recipe-book-image.png",
    "link": "https://myrecipebookapp.com",
    "github": "https://github.com/yourgithub/my-recipe-book"  
  }
]
;


  @ViewChildren('projectTab') projectTabs!: QueryList<ElementRef>;

  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
  //   this.service.getProjects().subscribe({
  //   next: (data) => {
  //     this.projects = data;
  //     console.log("Data retrieved");
  //   },
  //   error: (err) => console.error('API error:', err)
  // });
  //   this.cd.detectChanges();
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    this.projectTabs.forEach((tab, index) => {
      const el = tab.nativeElement;
      if (index % 2 !== 0) {
        this.renderer.addClass(el, 'reverse-layout');
      }
      observer.observe(el);
    });
  }

  viewOnGithub(project: any): void {
    console.log('View GitHub repo for:', project.title);
    window.open(project.link, '_blank');
  }

  openProjectInNewTab(projectId: number): void {
    const projectUrl = `/project/${projectId}`;
    this.router.navigate(['/project'], { queryParams: { id: projectId } });
    console.log("opening ", projectUrl);
  }
}
