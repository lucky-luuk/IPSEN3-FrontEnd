import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {AbbreviationModel} from "../../../afkoteek/search/abbreviation-list/abbreviation.model";
import {AbbreviationService} from "../../../afkoteek/search/abbreviation-list/abbreviation.service";
import {DropdownComponent} from "../../../afkoteek/search/dropdown/dropdown.component";
import {OrganisationModel} from "../../../afkoteek/search/abbreviation-list/organisation.model";
import {TicketModel} from "../ticket.model";

@Component({
  selector: 'app-new-abbreviation',
  templateUrl: './new-abbreviation.component.html',
  styleUrls: ['./new-abbreviation.component.scss']
})
export class NewAbbreviationComponent implements OnInit, AfterViewInit {
  @Input() ticket: TicketModel;
  @ViewChild(DropdownComponent) dropdown : any;

  constructor() {
   this.ticket = new TicketModel();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() : void {
    if (this.ticket.temporaryAbbreviation !== null)
      this.dropdown.selectOrganisation(this.ticket.temporaryAbbreviation.organisations[0]);
  }

  onChangeDescription(event : any) {
    if (this.ticket.temporaryAbbreviation !== null)
      this.ticket.temporaryAbbreviation.description = event.target.value;
  }

  onChangeName(event : any) {
    if (this.ticket.temporaryAbbreviation !== null)
      this.ticket.temporaryAbbreviation.name = event.target.value;
  }

  onChangeOrganisation(org : OrganisationModel) {
    if (this.ticket.temporaryAbbreviation !== null)
      this.ticket.temporaryAbbreviation.organisations[0] = org;
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
  setOrganisationDropdown(org : OrganisationModel) {
    this.dropdown.selectOrganisation(org);
  }
}
