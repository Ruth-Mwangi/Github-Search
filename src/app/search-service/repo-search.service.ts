import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchRepo } from '../search-repo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoSearchService {


  repo:SearchRepo;

  constructor(private http:HttpClient) { }

  searchRepo(search:HTMLInputElement){

    let apiRepo=(environment.searchRepo+search.value)

    interface ApiResponse{
      items:any
    }

    let promise=new Promise((resolve,reject)=>{

     this.http.get<ApiResponse>(apiRepo).toPromise().then(response=>{

      this.repo=response.items
      alert(response.items[0].name)
      alert(this.repo[0].name)
      resolve()
     },error=>{reject(error)})
      
    })
    return promise
  }
}
