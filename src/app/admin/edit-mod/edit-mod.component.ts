import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UsersModel} from "../usersHelper/users.model";
import {UserService} from "../usersHelper/user.service";

import {NgForm} from "@angular/forms";
import {AbbreviationListComponent} from "../../afkoteek/search/abbreviation-list/abbreviation-list.component";

import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AdminSavePopupComponent} from "./admin-save-popup/admin-save-popup.component";
import {NotSavedPopupComponent} from "../../moderator/ticket/not-saved-popup/not-saved-popup.component";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-edit-mod',
  templateUrl: './edit-mod.component.html',
  styleUrls: ['./edit-mod.component.scss']
})
export class EditModComponent implements OnInit {
  user: UsersModel;
  id: string = '';
  lastSearchedData : string = "";
  // userEdit: FormGroup;
  @ViewChild(AbbreviationListComponent) abbreviationList: any;

  constructor(
    private usersService : UserService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
  ) {

    this.user = new UsersModel();

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
      this.user = data;
      console.log(data);
    });
    // this.userEdit = new FormGroup({
    //
    // })
  }

  onClick(){
    this.modalService.open(AdminSavePopupComponent)
  }


  // onSubmit(){
  //   let data : {firstName : string, lastName : string, email : string, phoneNumber : string} = f.form.value
  //   this.onSubmit = () => {this.updateUser(f)};
  // }

  // onChangeUser(){
  //   this.usersService.updateUsers(this.user, this.user);
  // }

  updateUser(f : any) {
    let data: { firstName: string, lastName: string, email: string } = f.form.value
    // let user = new UsersModel();
    this.user.firstName = data.firstName;
    this.user.lastName = data.lastName;
    this.user.email = data.email;
    // user.phoneNumber = data.phoneNumber;
    this.usersService.updateUsers(this.user, () => {
    });
  }

  backToOverview() {
    let ref = this.modalService.open(NotSavedPopupComponent);
    // ref.componentInstance.data = {afkorting: this.abbreviation.name, beschrijving: this.abbreviation.description}
    ref.componentInstance.onClose = () => {
   //TODO weizigingen opslaan
      this.router.navigate(["moderator", "overview"]);

    }
  }

  onSelectOrganisation(orgid : string) {
    this.abbreviationList.setOrganisationIdFilter(orgid);
    this.abbreviationList.onSearch(this.lastSearchedData);
  }
}
