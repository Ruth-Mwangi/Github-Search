import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchRepo } from '../search-repo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoSearchService {


  repo:SearchRepo;

  constructor(private http:HttpClient) {

    this.repo=new SearchRepo([])
   }

  searchRepo(search:HTMLInputElement){

    let apiRepo=(environment.searchRepo+search.value)

    interface ApiResponse{
      items:any
    }

    let promise=new Promise((resolve,reject)=>{

     this.http.get<ApiResponse>(apiRepo).toPromise().then(response=>{
      this.repo.items=(response.items)
      resolve()
     },error=>{reject(error)})
      
    })
    
    return promise
  }

  displayRepo(){
    return this.repo
  }
}
