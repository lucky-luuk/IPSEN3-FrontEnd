import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {AbbreviationModel} from "../../../afkoteek/search/abbreviation-list/abbreviation.model";
import {AbbreviationService} from "../../../afkoteek/search/abbreviation-list/abbreviation.service";
import {DropdownComponent} from "../../../afkoteek/search/dropdown/dropdown.component";
import {OrganisationModel} from "../../../afkoteek/search/abbreviation-list/organisation.model";

@Component({
  selector: 'app-new-abbreviation',
  templateUrl: './new-abbreviation.component.html',
  styleUrls: ['./new-abbreviation.component.scss']
})
export class NewAbbreviationComponent implements OnInit, AfterViewInit {
  @Input() abbrModel: AbbreviationModel;
  @ViewChild(DropdownComponent) dropdown : any;

  constructor() {
   this.abbrModel = new AbbreviationModel();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() : void {
    this.dropdown.selectOrganisation(this.abbrModel.organisations[0]);
  }

  onChangeDescription(event : any) {
    this.abbrModel.description = event.target.value;
  }

  onChangeName(event : any) {
    this.abbrModel.name = event.target.value;
  }

  onChangeOrganisation(org : OrganisationModel) {
    this.abbrModel.organisations[0] = org;
  }
}
