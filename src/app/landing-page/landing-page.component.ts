import { Component, OnInit } from '@angular/core';
import { RuthUser } from '../ruth-class/ruth-user';
import { RepoSearchService } from '../search-service/repo-search.service';
import { UserSearchService } from '../search-service/user-search.service';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private userservice:UserSearchService,private reposervice:RepoSearchService,private user:UserService) { 
    
  }

  ruth:RuthUser

  searchRepo(search:HTMLInputElement){
    this.reposervice.searchRepo(search);

  }
  searchUser(search:HTMLInputElement){
    this.userservice.searchUser(search);
    
  }
  


  ngOnInit():void {

    this.user.ruthRequest()

    this.ruth=this.user.ruth
    
    
  }

}
