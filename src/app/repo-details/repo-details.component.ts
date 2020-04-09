import { Component, OnInit } from '@angular/core';
import { RepoSearchService } from '../search-service/repo-search.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  repos:any;
  

  constructor(private reposervice:RepoSearchService,private http:HttpClient) { 
    
  }

 



  ngOnInit(): void {

    this.repos=this.reposervice.displayRepo()
    
    
  }

}
