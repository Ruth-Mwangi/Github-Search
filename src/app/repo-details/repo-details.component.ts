import { Component, OnInit } from '@angular/core';
import { RepoSearchService } from '../search-service/repo-search.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  repo:any;

  constructor(private reposervice:RepoSearchService) { 

    this.repo=reposervice.displayRepo()
  }



  ngOnInit(): void {

    

    
  }

}
