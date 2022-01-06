import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UsersModel} from "../usersHelper/users.model";
import {UserService} from "../usersHelper/user.service";

import {NgForm} from "@angular/forms";
import {AbbreviationListComponent} from "../../afkoteek/search/abbreviation-list/abbreviation-list.component";

import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AdminSavePopupComponent} from "./admin-save-popup/admin-save-popup.component";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-edit-mod',
  templateUrl: './edit-mod.component.html',
  styleUrls: ['./edit-mod.component.scss']
})
export class EditModComponent implements OnInit {
  model: UsersModel;
  id: string = '';
  // userEdit: FormGroup;

  constructor(
    private usersService : UserService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.model = new UsersModel();
    // this.userEdit = new FormGroup();
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
      this.id = params['id'];
    })
    this.initForm()
  }

  initForm() {
    let user: UsersModel;
    this.usersService.getUsersById(this.id, (data) => {
      user = data;
      this.model = data;
      console.log(data);
    });
    // this.userEdit = new FormGroup({
    //
    // })
  }

  onClick(){
    this.modalService.open(AdminSavePopupComponent)
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  onSelectOrganisation(orgid : string) {
    this.abbreviationList.setOrganisationIdFilter(orgid);
    this.abbreviationList.onSearch(this.lastSearchedData);
  }
}
