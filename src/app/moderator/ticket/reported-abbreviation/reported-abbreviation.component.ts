import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {OrganisationModel} from "../../../afkoteek/search/abbreviation-list/organisation.model";
import {AbbreviationModel} from "../../../afkoteek/search/abbreviation-list/abbreviation.model";
import {DropdownComponent} from "../../../afkoteek/search/dropdown/dropdown.component";
import {TicketModel} from "../ticket.model";

@Component({
  selector: 'app-reported-abbreviation',
  templateUrl: './reported-abbreviation.component.html',
  styleUrls: ['./reported-abbreviation.component.scss']
})
export class ReportedAbbreviationComponent implements OnInit {
  @Input() ticket: TicketModel;
  @ViewChild(DropdownComponent) dropdown : any;
  constructor() {
    this.ticket = new TicketModel();
  }

  ngOnInit(): void {
  }

  onChangeOrganisation(org : OrganisationModel) {
    if (this.ticket.temporaryAbbreviation !== null)
      this.ticket.temporaryAbbreviation.organisations[0] = org;
  }
}
