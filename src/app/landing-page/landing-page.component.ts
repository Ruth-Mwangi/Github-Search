import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { RuthUser } from '../ruth-class/ruth-user';
import { HttpClient } from '@angular/common/http';
import { RuthRepo } from '../ruth-class/ruth-repo';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private userservice:UserService,private http:HttpClient) { 
    
  }

  ruth:RuthUser;

  repos:RuthRepo;

 

  ngOnInit():void {
    
      
    this.userservice.ruthRequest()
    this.ruth=this.userservice.ruth
    // this.userservice.repoRequest()
    // this.repos=this.userservice.repos
    // alert(typeof(this.ruth))
    //this.repos=[{name:"ruru",description:"ruru crafts"},{name:"ruru",description:"ruru crafts"},{name:"ruru",description:"ruru crafts"},]
    interface ApiResponse{
      items:any
    }
    this.http.get<ApiResponse>(environment.rururepo).subscribe(response=>{
      this.repos=response.items
    })
    
  }

}
