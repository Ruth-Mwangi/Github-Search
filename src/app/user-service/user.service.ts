import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RuthUser } from '../ruth-class/ruth-user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ruth:RuthUser;

  constructor(private http:HttpClient) {

    this.ruth=new RuthUser("","","")
   }

  ruthRequest(){

    interface ApiResponse{
      name:string
      avatar_url:string
      repos_url:string
    }

    let promise=new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.ruthApiUrl).toPromise().then(response=>{

        this.ruth.name=response.name;
        this.ruth.avatar_url=response.avatar_url
        this.ruth.repos_url=response.repos_url
        resolve()
      },error=>{reject(error)})
      
    })

    return promise
  }
}
