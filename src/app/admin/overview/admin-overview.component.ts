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
    this.userService.getUsers((data)=>{
      this.users = data;
    })
  }


  onSearch(data: string) {
    this.users = [];
    if (data == "") {
      this.users = this.filterdUsers;
    }

    for (let user of this.filterdUsers) {
      if (user.id == data ||
        user.firstName == data ||
        user.lastName == data) {
        this.users.push(user);
      }
    }
  }

  getUsers() {
    this.users = this.userService.getModUsers();
  }
}
