import { Component, OnInit } from '@angular/core';
import {AbbreviationModel} from "../../../search/abbreviation-list/abbreviation.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {TicketModel} from "../../../../moderator/ticket/ticket.model";
import {tick} from "@angular/core/testing";
import {TicketTypeModel} from "../../../../moderator/ticket/ticketType.model";
import {TicketStatusModel} from "../../../../moderator/ticket/ticketStatus.model";
import {AccountService} from "../../../../account.service";
import {TicketService} from "../../../../moderator/ticket.service";

@Component({
  selector: 'app-report-popup',
  templateUrl: './report-popup.component.html',
  styleUrls: ['./report-popup.component.scss']
})
export class ReportPopupComponent implements OnInit {
  reportedAbbreviation : AbbreviationModel = new AbbreviationModel();
  private description : string = "";

  constructor(public activeModal : NgbActiveModal, private accountService : AccountService, private ticketService : TicketService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let ticket = new TicketModel();
    ticket.type = TicketTypeModel.REPORT;
    ticket.accountId = this.accountService.getCurrentUserAccount().id;
    ticket.temporaryAbbreviation = this.reportedAbbreviation;
    ticket.statusName = TicketStatusModel.UNDER_REVIEW;
    this.ticketService.createTickets([ticket], () => {});

    // mischien een captcha toevoegen?
    this.activeModal.close();
  }

  onSetDescription(event : any) {
    this.description = event.target.value;
  }
}
