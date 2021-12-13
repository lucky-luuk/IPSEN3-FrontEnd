import {Component, Input, OnInit} from '@angular/core';
import {AbbreviationService} from "./abbreviation.service";
import {AbbreviationModel} from "./abbreviation.model";
import {OrganisationModel} from "./organisation.model";
import {DropdownComponent} from "../dropdown/dropdown.component";

@Component({
  selector: 'app-abbreviation-list',
  templateUrl: './abbreviation-list.component.html',
  styleUrls: ['./abbreviation-list.component.scss']
})
export class AbbreviationListComponent implements OnInit {
  abbreviations : AbbreviationModel[] = [];
  private http : AbbreviationService;
  private organisationIdFilter : string = DropdownComponent.NO_ORGANISATION_SELECTED_ID;

  constructor(private h : AbbreviationService) {
    this.http = h;
  }

  ngOnInit(): void {}

  onSearch(name : string) : void {
    if (this.organisationIdFilter === DropdownComponent.NO_ORGANISATION_SELECTED_ID) {
      this.http.getAbbreviationsByName(name, (data) => {
        this.setAbbreviationData(data);
      });
    }
    else if (name === "") {
      this.http.geAbbreviationByOrgId(this.organisationIdFilter, (data) => {
        this.setAbbreviationData(data);
      });
    }
    else {
      this.http.getAbbreviationByOrgIdAndName(name, this.organisationIdFilter, (data) => {
        this.setAbbreviationData(data);
      });
    }
  }

  setOrganisationIdFilter(id : string) {
    this.organisationIdFilter = id;
  }

  private setAbbreviationData(data : AbbreviationModel[]) {
    if (data === null) {
      this.abbreviations = []
      let abbr = new AbbreviationModel();
      abbr.name = "leeg";
      abbr.description = "er zijn geen afkortingen gevonden!";
      this.abbreviations.push(abbr);
    }
    else {
      this.abbreviations = data;
    }
  }
}
