import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { RuthUser } from '../ruth-class/ruth-user';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ruth:RuthUser;

  ngOnInit() {

    this.userservice.ruthRequest();
    this.ruth=this.userservice.ruth
  }

}
