import { Component, OnInit } from '@angular/core';
import {UsersModel} from "../usersHelper/users.model";
import {UserService} from "../usersHelper/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss']
})

export class AdminOverviewComponent implements OnInit {
  users: UsersModel[] = [];
  filterdUsers: UsersModel[] =[];

  constructor(private userService: UserService, public router: Router) {
    this.users = this.userService.getUsers();
    this.filterdUsers = this.users;
  }

  ngOnInit(): void {
  }

  onSearch(data : string) {
    this.users =[];
    if(data == ""){this.users = this.filterdUsers;}

    for(let user of this.filterdUsers){  
      if(user.userid    == data ||
         user.firstname == data ||
         user.lastname  == data){          
        this.users.push(user);
      }
    }
  }
  
}
