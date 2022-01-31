import {Component, OnInit, ViewChild} from '@angular/core';
import {AbbreviationListComponent} from "../../search/abbreviation-list/abbreviation-list.component";
import {AbbreviationModel} from "../../search/abbreviation-list/abbreviation.model";
import {AbbreviationService} from "../../search/abbreviation-list/abbreviation.service";
import {DropdownComponent} from "../../../features/dropdown/dropdown.component";
import {OrganisationModel} from "../../search/abbreviation-list/organisation.model";
import {TicketModel} from "../../../moderator/ticket/ticket.model";
import {TicketTypeModel} from "../../../moderator/ticket/ticketType.model";
import {AccountService} from "../../../account/account.service";
import {tick} from "@angular/core/testing";
import {TicketStatusModel} from "../../../moderator/ticket/ticketStatus.model";
import {TicketService} from "../../../moderator/ticket.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmPopupComponent} from "../confirm-popup/confirm-popup.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild(AbbreviationListComponent) abbreviationList: any;
  @ViewChild(DropdownComponent) dropDownComponent : any;
  model : AbbreviationModel;

  constructor(private accountService : AccountService, private ticketService : TicketService, private modalService : NgbModal, private router : Router) {
    this.model = new AbbreviationModel();
  }

  ngOnInit(): void {
  }

  onSubmit() : void {
    let ref : NgbModalRef = this.modalService.open(ConfirmPopupComponent);
    ref.componentInstance.headerText = "weet je zeker dat je deze afkorting wil toevoegen?";
    ref.componentInstance.bodyText = this.model.name + ": " + this.model.description;
    ref.componentInstance.submitText = "voeg toe";
    ref.componentInstance.onSubmit = () => {this.createTicket();};
  }

  createTicket() {
    let ticket = new TicketModel();
    ticket.type = TicketTypeModel.ADD_ABBREVIATION;
    ticket.accountId = this.accountService.getCurrentUserAccount().id;
    ticket.temporaryAbbreviation = this.model;
    ticket.temporaryAbbreviation.accountId = ticket.accountId;
    ticket.statusName = TicketStatusModel.REGISTERED;
    this.ticketService.createTickets([ticket], () => {});
    this.router.navigate(["afko"]);
  }

  onSearch(data : string) : void {
    this.abbreviationList.onSearch(data);
    this.model.name = data;
  }

  onSelectOrganisation(org : OrganisationModel) {
    this.model.organisations = [];
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
