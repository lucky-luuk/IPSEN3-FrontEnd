import {Component, Input, OnInit} from '@angular/core';
import {UsersModel} from "../usersHelper/users.model";
import {UserService} from "../usersHelper/user.service";

@Component({
  selector: 'app-edit-mod',
  templateUrl: './edit-mod.component.html',
  styleUrls: ['./edit-mod.component.scss']
})
export class EditModComponent implements OnInit {
  @Input() model: UsersModel;

  constructor(private UsersService : UserService) {
    this.model = new UsersModel();
  }

  ngOnInit(): void {
  }

}
