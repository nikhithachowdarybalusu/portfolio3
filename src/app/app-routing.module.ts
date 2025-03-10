import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDescriptionComponent } from './project-description/project-description.component';

const routes: Routes = [
  { path: 'project/:id', component: ProjectDescriptionComponent }, // Dynamic route for project details

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
