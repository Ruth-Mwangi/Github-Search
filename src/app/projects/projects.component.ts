import { Component, OnInit } from '@angular/core';
import { RuthUser } from '../ruth-class/ruth-user';
import { RuthRepo } from '../ruth-class/ruth-repo';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user-service/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private userservice:UserService,private http:HttpClient) { 
    
  }

  ruth:RuthUser;

  repos:any;

 

  ngOnInit():void {
    
      
    this.userservice.ruthRequest()
    this.ruth=this.userservice.ruth
    this.userservice.repoRequest();
    this.repos=this.userservice.repos

   
    
    
  }
  

}
