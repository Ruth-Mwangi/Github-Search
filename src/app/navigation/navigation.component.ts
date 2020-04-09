import { Component, OnInit } from '@angular/core';
import { UserSearchService } from '../search-service/user-search.service';
import { RepoSearchService } from '../search-service/repo-search.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private userservice:UserSearchService,private reposervice:RepoSearchService) { }

  searchRepo(search:HTMLInputElement){
    this.reposervice.searchRepo(search);

  }
  searchUser(search:HTMLInputElement){
    this.userservice.searchUser(search);
    
  }

  ngOnInit(): void {
  }

}
