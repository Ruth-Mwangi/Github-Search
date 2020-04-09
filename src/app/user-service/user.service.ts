import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RuthUser } from '../ruth-class/ruth-user';
import { environment } from 'src/environments/environment';
import { RuthRepo } from '../ruth-class/ruth-repo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ruth:RuthUser;
  repos:RuthRepo;
  

  constructor(private http:HttpClient) {

    this.ruth=new RuthUser("","")
    this.repos=new RuthRepo([])
    
   }

  ruthRequest(){

    interface ApiResponse{
      name:string
      avatar_url:string

      
    }

    let promise=new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.ruthApiUrl).toPromise().then(response=>{
        this.ruth.name=response.name;
        this.ruth.avatar_url=response.avatar_url
        
        
        resolve()
      },error=>{reject(error)})
      
    })

    return promise
  }

  repoRequest(){
    
    
    interface ApiResponse{
      items:any
    }

   
    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.rururepo).toPromise().then(response=>{
        this.repos.items=(response.items)
        
        resolve()
      },error=>{ reject(error)})
    })

    
    return promise;
  }

  
}
