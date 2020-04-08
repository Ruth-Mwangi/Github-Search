import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { ProjectsComponent } from '../projects/projects.component';

const routes:Routes=[
  {path:'home',component:LandingPageComponent},
  {path:'projects',component:ProjectsComponent},
  { path: '', redirectTo:"/home", pathMatch:"full"},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
