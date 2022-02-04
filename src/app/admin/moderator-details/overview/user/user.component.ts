import {Component, Input, OnInit} from '@angular/core';
import {UsersModel} from "../../../usersHelper/users.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() singleUser: UsersModel;

  constructor() {
    this.singleUser = new UsersModel();
  }

  ngOnInit(): void {
  }

}
