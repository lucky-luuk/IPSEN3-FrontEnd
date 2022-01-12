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
  filteredUsers: UsersModel[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers((data)=>{
      this.users = data;
      this.filteredUsers = data;
    })
  }

  onSearch(data : string) {
    this.filteredUsers = [];
    for (let user of this.users) {
      if (user.firstName.toLowerCase().includes(data.toLowerCase())) {
        this.filteredUsers.push(user);
      }
    }
  }


}
