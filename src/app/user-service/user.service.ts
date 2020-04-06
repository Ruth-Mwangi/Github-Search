import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RuthUser } from '../ruth-class/ruth-user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ruth:RuthUser;

  constructor(private http:HttpClient) { }

  ruthRequest(){

    interface ApiResponse{
      name:string
      avatar_url:string
      repos_url:string
    }

    let promise=new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.ruthApiUrl).subscribe(data=>{

        this.ruth.name=data.name;
        this.ruth.avatar_url=data.avatar_url
        this.ruth.repos_url=data.repos_url
        resolve()
      },error=>{reject(error)})
      
    })

    return promise
  }
}
