import { Component, OnInit } from '@angular/core';
import {UsersModel} from "../usersHelper/users.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../usersHelper/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss']
})

export class AdminOverviewComponent implements OnInit {
  users: UsersModel[] = [];
  filterdUsers: UsersModel[] = [];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.setUsers();
    this.getUsers();
  }



  onSearch(data : string) {
    this.users =[];
    if(data == ""){
      this.users = this.filterdUsers;
    }else{
    for(let user of this.filterdUsers){  
      if(user.userid.includes(data)    ||
         user.firstname.includes(data) ||
         user.lastname.includes(data)  ||
         user.status.includes(data)    ||
         user.org_id.includes(data))
         { this.users.push(user);}
      }
    }
  }
  


  getUsers() {
    this.users = this.userService.getModUsers();
  }

}
