import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {OrganisationModel} from "../../../afkoteek/search/abbreviation-list/organisation.model";
import {AbbreviationModel} from "../../../afkoteek/search/abbreviation-list/abbreviation.model";
import {DropdownComponent} from "../../../afkoteek/search/dropdown/dropdown.component";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reported-abbreviation',
  templateUrl: './reported-abbreviation.component.html',
  styleUrls: ['./reported-abbreviation.component.scss']
})
export class ReportedAbbreviationComponent implements OnInit {
  reportForm = new FormGroup({abbreviation : new FormControl(), definition: new FormControl(), organisation: new FormControl()})
  @Input() abbrModel: AbbreviationModel;
  @ViewChild(DropdownComponent) dropdown : any;

  constructor() {
    this.abbrModel = new AbbreviationModel();
  }

  ngOnInit(): void {
  }

  onChangeOrganisation(org : OrganisationModel) {
    this.abbrModel.organisations[0] = org;
  }

}
