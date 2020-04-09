import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsComponent } from './projects/projects.component'
import { RoutingModule } from './routing/routing.module';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
import {FormsModule} from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component'


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectsComponent,
    DateCountPipe,
    HighlightDirective,
    UserDetailsComponent,
    RepoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
