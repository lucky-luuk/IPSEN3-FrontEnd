import { Component, OnInit } from '@angular/core';
import {TicketModel} from "../../../moderator/ticket/ticket.model";
import {TicketTypeModel} from "../../../moderator/ticket/ticketType.model";
import {TicketStatusModel} from "../../../moderator/ticket/ticketStatus.model";
import {AccountService} from "../../../account.service";
import {TicketService} from "../../../moderator/ticket.service";
import {Router} from "@angular/router";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmPopupComponent} from "../confirm-popup/confirm-popup.component";

@Component({
  selector: 'app-info-request',
  templateUrl: './info-request.component.html',
  styleUrls: ['./info-request.component.scss']
})
export class InfoRequestComponent implements OnInit {

  constructor(private router : Router, private modalService : NgbModal, private accountService : AccountService, private ticketService : TicketService) {

  }

  ngOnInit(): void {
  }


  onSubmit(f : any) {
    let data : {name : string, email : string, phone : string, data : string} = f.form.value
    let ref : NgbModalRef = this.modalService.open(ConfirmPopupComponent);
    ref.componentInstance.headerText = "wil je deze informatie opvragen?";
    ref.componentInstance.bodyText = data.data;
    ref.componentInstance.submitText = "verstuur aanvraag";
    ref.componentInstance.onSubmit = () => {this.createTicket(f);};
  }

  createTicket(f : any) {
    let data : {name : string, email : string, phone : string, data : string} = f.form.value
    let ticket = new TicketModel();
    ticket.type = TicketTypeModel.INFO;
    ticket.accountId = this.accountService.getCurrentUserAccount().id;
    ticket.temporaryAbbreviation = null;
    ticket.statusName = TicketStatusModel.REGISTERED;
    ticket.message = data.data;
    ticket.userName = data.name;
    ticket.userEmail = data.email;
    ticket.userPhone = data.phone;
    this.ticketService.createTickets([ticket], () => {});
    this.router.navigate(["afko"]);
  }

}
