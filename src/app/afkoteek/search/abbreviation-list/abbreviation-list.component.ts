import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AbbreviationService} from "./abbreviation.service";
import {AbbreviationModel} from "./abbreviation.model";
import {DropdownComponent} from "../dropdown/dropdown.component";

@Component({
  selector: 'app-abbreviation-list',
  templateUrl: './abbreviation-list.component.html',
  styleUrls: ['./abbreviation-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AbbreviationListComponent implements OnInit {
  abbreviations : AbbreviationModel[] = [];
  private http : AbbreviationService;
  organisationIdFilter : string = DropdownComponent.NO_ORGANISATION_SELECTED_ID;
  // a bit hacky but whatever
  @Input() list_height : string = "45vh";

  constructor(private h : AbbreviationService) {
    this.http = h;
  }

  ngOnInit(): void {}

  onSearch(name : string) : void {
    // search by name only
    if (this.organisationIdFilter === DropdownComponent.NO_ORGANISATION_SELECTED_ID) {
      this.http.getAbbreviationsByName(name, (data) => {
        this.setAbbreviationData(data);
      });
    }
    // search by organisation id
    else if (name === "") {
      this.http.geAbbreviationByOrgId(this.organisationIdFilter, (data) => {
        this.setAbbreviationData(data);
      });
    }
    // search by org id and name
    else {
      this.http.getAbbreviationByOrgIdAndName(name, this.organisationIdFilter, (data) => {
        this.setAbbreviationData(data);
      });
    }
  }

  setOrganisationIdFilter(id : string) {
    this.organisationIdFilter = id;
  }

  public setAbbreviationData(data : AbbreviationModel[] | null) {
    if (data === null) {
      this.abbreviations = [];
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
