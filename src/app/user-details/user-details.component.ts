import { Component, OnInit } from '@angular/core';
import { UserSearchService } from '../search-service/user-search.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users:any

  constructor(private userservice:UserSearchService) { }

  ngOnInit(): void {

    this.users=this.userservice.displayUser()
  }

}
