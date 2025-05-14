import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio3';
  isMenuOpen = false;
  projectFound = false;

  constructor(private route: ActivatedRoute, private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    const projectId = parseInt(sessionStorage.getItem('selectedProject')!, 10);
    console.log(projectId);
    this.projectFound = projectId > 0 ? true : false;
    if (this.projectFound){
      this.cd.detectChanges();
    }
    console.log(this.projectFound);
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    this.toggleMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState({}, '', `#${sectionId}`);  // Update the URL
    }
  }
}
