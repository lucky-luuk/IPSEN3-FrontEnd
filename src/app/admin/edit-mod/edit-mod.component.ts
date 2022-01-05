import {Component, Input, OnInit} from '@angular/core';
import {UsersModel} from "../usersHelper/users.model";
import {UserService} from "../usersHelper/user.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AdminSavePopupComponent} from "./admin-save-popup/admin-save-popup.component";

@Component({
  selector: 'app-edit-mod',
  templateUrl: './edit-mod.component.html',
  styleUrls: ['./edit-mod.component.scss']
})
export class EditModComponent implements OnInit {
  @Input() model: UsersModel;

  constructor(private UsersService : UserService, private modalService: NgbModal) {
    this.model = new UsersModel();
  }

  onClick(){
    this.modalService.open(AdminSavePopupComponent)
  }
  ngOnInit(): void {
  }

}
