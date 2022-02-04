import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {OrganisationModel} from "../../../../afkoteek/search/abbreviation-list/organisation.model";
import {AbbreviationModel} from "../../../../afkoteek/search/abbreviation-list/abbreviation.model";
import {DropdownComponent} from "../../../../features/dropdown/dropdown.component";
import {TicketModel} from "../../ticket.model";

@Component({
  selector: 'app-reported-abbreviation',
  templateUrl: './reported-abbreviation.component.html',
  styleUrls: ['./reported-abbreviation.component.scss']
})
export class ReportedAbbreviationComponent implements OnInit, AfterViewInit {
  @Input() ticket: TicketModel;
  @ViewChild(DropdownComponent) dropdown : any;
  constructor() {
    this.ticket = new TicketModel();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //if (this.ticket.temporaryAbbreviation !== null)
    //this.features.selectOrganisation(this.ticket.temporaryAbbreviation.organisations[0]);
  }

  onChangeOrganisation(org : OrganisationModel) {
    if (this.ticket.temporaryAbbreviation !== null)
      this.ticket.temporaryAbbreviation.organisations[0] = org;
  }

  onChangeDescription(event : any) {
    if (this.ticket.temporaryAbbreviation !== null)
      this.ticket.temporaryAbbreviation.description = event.target.value;
  }

  onChangeName(event : any) {
    if (this.ticket.temporaryAbbreviation !== null)
      this.ticket.temporaryAbbreviation.name = event.target.value;
  }

  getAbbreviationName() : string {
    if (this.ticket.temporaryAbbreviation !== null)
      return this.ticket.temporaryAbbreviation.name;
    return "";
  }
  getAbbreviationDescription() : string {
    if (this.ticket.temporaryAbbreviation !== null)
      return this.ticket.temporaryAbbreviation.description;
    return "";
  }

  setOrganisationDropDown(org : OrganisationModel) {
    this.dropdown.selectOrganisation(org);
    this.dropdown.ngOnInit();
  }
  getSelectedOrganisation() : OrganisationModel {
    if (this.ticket.temporaryAbbreviation !== null) {
      if (this.ticket.temporaryAbbreviation.organisations !== undefined)
        return this.ticket.temporaryAbbreviation.organisations[0];
    }
    return new OrganisationModel();
  }
}
