import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TicketModel} from "../ticket/ticket.model";
import {TicketService} from "../ticket.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  tickets : TicketModel[] = [];

  constructor(private router: Router, private ticketService: TicketService) {
    this.ticketService.getAllTickets((data) => {
      this.tickets = data;
    });

  }

  ngOnInit(): void {

  }

  onClick(ticket : TicketModel) {
    this.ticketService.setSelectedTicket(ticket);
  }
}
