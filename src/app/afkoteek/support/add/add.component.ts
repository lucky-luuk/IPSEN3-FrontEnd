import {Component, OnInit, ViewChild} from '@angular/core';
import {AbbreviationListComponent} from "../../search/abbreviation-list/abbreviation-list.component";
import {AbbreviationModel} from "../../search/abbreviation-list/abbreviation.model";
import {AbbreviationService} from "../../search/abbreviation-list/abbreviation.service";
import {DropdownComponent} from "../../search/dropdown/dropdown.component";
import {OrganisationModel} from "../../search/abbreviation-list/organisation.model";
import {TicketModel} from "../../../moderator/ticket/ticket.model";
import {TicketTypeModel} from "../../../moderator/ticket/ticketType.model";
import {AccountService} from "../../../account.service";
import {tick} from "@angular/core/testing";
import {TicketStatusModel} from "../../../moderator/ticket/ticketStatus.model";
import {TicketService} from "../../../moderator/ticket.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild(AbbreviationListComponent) abbreviationList: any;
  @ViewChild(DropdownComponent) dropDownComponent : any;
  model : AbbreviationModel;

  constructor(private accountService : AccountService, private ticketService : TicketService) {
    this.model = new AbbreviationModel();
  }

  ngOnInit(): void {
  }

  onSubmit() : void {
    let ticket = new TicketModel();
    ticket.type = TicketTypeModel.ADD_ABBREVIATION;
    ticket.accountId = this.accountService.getCurrentUserAccount().id;
    ticket.temporaryAbbreviation = this.model;
    ticket.statusName = TicketStatusModel.UNDER_REVIEW;
    this.ticketService.createTickets([ticket], () => {});
  }

  onSearch(data : string) : void {
    this.abbreviationList.onSearch(data);
    this.model.name = data;
  }

  onSelectOrganisation(org : OrganisationModel) {
    this.model.organisations.push(org);
  }

  onSetDescription(event : any) {
    this.model.description = event.target.value;
  }

  shouldEnableButton() : boolean {
    return this.model.name !== AbbreviationModel.DEFAULT_NAME
      && this.model.organisations.length !== 0
      && this.model.description !== AbbreviationModel.DEFAULT_DESCRIPTION
  }

  showAbbreviationListSearchingAnimation() {
    this.abbreviationList.showSearchingAnimation();
  }
}
