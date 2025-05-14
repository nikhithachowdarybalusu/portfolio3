import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDescriptionComponent } from './project-description/project-description.component';

const routes: Routes = [
  // Dynamic route for project details
  { path: 'project', component: ProjectDescriptionComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
