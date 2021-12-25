import { Component, OnInit } from '@angular/core';
import {TicketModel} from "../../../moderator/ticket/ticket.model";
import {TicketTypeModel} from "../../../moderator/ticket/ticketType.model";
import {TicketStatusModel} from "../../../moderator/ticket/ticketStatus.model";
import {AccountService} from "../../../account.service";
import {TicketService} from "../../../moderator/ticket.service";

@Component({
  selector: 'app-info-request',
  templateUrl: './info-request.component.html',
  styleUrls: ['./info-request.component.scss']
})
export class InfoRequestComponent implements OnInit {

  constructor(private accountService : AccountService, private ticketService : TicketService) {

  }

  ngOnInit(): void {
  }


  onSubmit(f : any) {

    // todo actually save the data
    let data : {name : string, email : string, phone : string, data : string} = f.form.value
    let ticket = new TicketModel();
    ticket.type = TicketTypeModel.INFO;
    ticket.accountId = this.accountService.getCurrentUserAccount().id;
    ticket.temporaryAbbreviation = null;
    ticket.statusName = TicketStatusModel.UNDER_REVIEW;
    ticket.message = data.data;
    ticket.userName = data.name;
    ticket.userEmail = data.email;
    ticket.userPhone = data.phone;
    this.ticketService.createTickets([ticket], () => {});
  }

}
