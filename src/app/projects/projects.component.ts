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
    "title": "My Portfolio",
    "period": "Jan 2025 – Mar 2025",
    "description": [
      "Developed a Full-stack portfolio application using .NET (backend) and Angular (frontend), with emphasis on RESTful API integration to manage user data and content.",
      "Designed and implemented MVC architecture to ensure a scalable and maintainable application structure.",
      "Integrated SQL for database storage and applied best practices for API development using Swagger for clear documentation and streamlined API usage.",
      "Currently finalizing styling and preparing for deployment, aiming to boost profile visibility and user engagement by 50%."
    ],
    "image": "assets/portfolio-image.png",
    "link": "https://nikhithachowdarybalusu.github.io/portfolio3/",
    "github": "https://github.com/nikhithachowdarybalusu/portfolio3"
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
    "link": "https://github.com/nikhithachowdarybalusu/Library_Management_System_DB",
    "github": "https://github.com/nikhithachowdarybalusu/Library_Management_System_DB"
  },
  {
  "id": 3,
  "title": "Household Food Expenditure Analysis & Prediction",
  "period": "Mar 2024 – May 2024",
  "description": [
    "Performed end-to-end data preprocessing on consumer expenditure data, including missing value treatment, outlier detection, and multicollinearity reduction.",
    "Engineered insightful features like food away/home ratio and expenditure proportions to enhance model accuracy.",
    "Built and compared predictive models including Linear Regression and Random Forest, achieving high R² on both training and test sets.",
    "Used visualizations (scatter plots, KDEs, boxplots, pairplots) to explore data relationships and model residuals.",
    "Applied PCA for dimensionality reduction and VIF analysis for multicollinearity control."
  ],
  "image": "assets/food-expenditure-prediction.png",
  "link": "https://yourportfolio.com/projects/food-expenditure-prediction",
  "github": "assets/Data Science Project.ipynb"
  },
  {
    "id": 4,
    "title": "Recipe App using .Net MAUI",
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
    window.open(project.github, '_blank');
  }

  openProjectInNewTab(projectId: number): void {
    const projectUrl = `/project/${projectId}`;
    this.router.navigate(['/project'], { queryParams: { id: projectId } });
    console.log("opening ", projectUrl);
  }
}
