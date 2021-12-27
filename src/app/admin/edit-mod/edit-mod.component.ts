import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UsersModel} from "../usersHelper/users.model";
import {UserService} from "../usersHelper/user.service";
import {NgForm} from "@angular/forms";
import {AbbreviationListComponent} from "../../afkoteek/search/abbreviation-list/abbreviation-list.component";

@Component({
  selector: 'app-edit-mod',
  templateUrl: './edit-mod.component.html',
  styleUrls: ['./edit-mod.component.scss']
})
export class EditModComponent implements OnInit {
  @Input() model: UsersModel;
  @ViewChild(AbbreviationListComponent) abbreviationList: any;

  lastSearchedData : string = "";

  constructor(private UsersService : UserService) {
    this.model = new UsersModel();
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  onSelectOrganisation(orgid : string) {
    this.abbreviationList.setOrganisationIdFilter(orgid);
    this.abbreviationList.onSearch(this.lastSearchedData);
  }
}

