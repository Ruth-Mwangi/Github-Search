import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchUser } from '../search-user';
import { environment } from 'src/environments/environment';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  constructor(private http:HttpClient) { }

  user:SearchUser;

  searchUser(search:HTMLInputElement){
    let apiUser=(environment.searchUser+search.value)

    interface ApiResponse{
      items:any
    }

    let promise= new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(apiUser).toPromise().then(response=>{
        this.user=response.items
        resolve()
      },error=>{reject(error)})
    })
  }
}
