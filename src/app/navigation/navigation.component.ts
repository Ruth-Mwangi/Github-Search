import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UserSearchService } from '../search-service/user-search.service';
import { RepoSearchService } from '../search-service/repo-search.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @ViewChild('search') elem: ElementRef;

  constructor(private userservice:UserSearchService,private reposervice:RepoSearchService) { }

  searchRepo(search:HTMLInputElement){
    this.reposervice.searchRepo(search);
    this.elem.nativeElement.value=''

  }
  searchUser(search:HTMLInputElement){
    this.userservice.searchUser(search);
    this.elem.nativeElement.value=''
    
  }

  ngOnInit(): void {
  }

}
