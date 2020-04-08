import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { RuthUser } from '../ruth-class/ruth-user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private userservice:UserService,http:HttpClient) { }

  ruth:RuthUser;

  repos:any;

  links=[{name:"rutu",description:"ruru"},
  {name:"rutu",description:"ruru"},
  {name:"rutu",description:"ruru"},
  {name:"rutu",description:"ruru"}


]

  ngOnInit():void {
    this.userservice.repoRequest();
    this.repos=this.userservice.repos   
    this.userservice.ruthRequest();
    this.ruth=this.userservice.ruth
     

    
  }

}
