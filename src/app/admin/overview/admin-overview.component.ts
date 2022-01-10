import { Component, OnInit } from '@angular/core';
import {UsersModel} from "../usersHelper/users.model";
import {UserService} from "../usersHelper/user.service";
import { Router } from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss']
})

export class AdminOverviewComponent implements OnInit {
  users: UsersModel[] = [];
  filterdUsers: UsersModel[] = [];

  constructor(private userService: UserService, public router: Router) {
    // this.users = this.userService.getUsers();
    // this.filterdUsers = this.users;

  }

  ngOnInit(): void {
    this.userService.setUsers();
    this.getAllUsers();
  }
  setUsers(userList: UsersModel[]) {
    this.users = userList
  }

  getAllUsers() {
    this.users = this.userService.getModUsers()
    this.filterdUsers = this.users;
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
  
}
