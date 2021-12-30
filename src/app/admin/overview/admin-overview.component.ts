import { Component, OnInit } from '@angular/core';
import {UsersModel} from "../usersHelper/users.model";
import {UserService} from "../usersHelper/user.service";

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss']
})

export class AdminOverviewComponent implements OnInit {
  users: UsersModel[] = [];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
  }

  getAllUsers() : void {
    this.userService.getAllUsers((data) => {
      this.users = data;
    });
  }

  onClick(user : UsersModel) : void {
    this.userService.setSelectedUser(user)
  }
}
