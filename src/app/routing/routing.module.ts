import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { ProjectsComponent } from '../projects/projects.component';
import { RepoDetailsComponent } from '../repo-details/repo-details.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

const routes:Routes=[
  {path:'home',component:LandingPageComponent},
  {path:'projects',component:ProjectsComponent},
  { path: '', redirectTo:"/home", pathMatch:"full"},
  {path:'repositories',component:RepoDetailsComponent},
  {path:'users',component:UserDetailsComponent}
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
