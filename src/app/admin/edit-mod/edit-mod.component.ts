import {Component, Input, OnInit} from '@angular/core';
import {UsersModel} from "../usersHelper/users.model";
import {UserService} from "../usersHelper/user.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AdminSavePopupComponent} from "./admin-save-popup/admin-save-popup.component";
import {NotSavedPopupComponent} from "../../moderator/ticket/not-saved-popup/not-saved-popup.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-mod',
  templateUrl: './edit-mod.component.html',
  styleUrls: ['./edit-mod.component.scss']
})
export class EditModComponent implements OnInit {
  @Input() model: UsersModel;

  constructor(private UsersService : UserService, private modalService: NgbModal, private router: Router) {
    this.model = new UsersModel();
  }

  onClick(){
    this.modalService.open(AdminSavePopupComponent)
  }
  ngOnInit(): void {
  }


  backToOverview() {
    let ref = this.modalService.open(NotSavedPopupComponent);
    // ref.componentInstance.data = {afkorting: this.abbreviation.name, beschrijving: this.abbreviation.description}
    ref.componentInstance.onClose = () => {
   //TODO weizigingen opslaan
      this.router.navigate(["moderator", "overview"]);

    }
  }

}
