import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TicketModel} from "../ticket/ticket.model";
import {TicketService} from "../ticket.service";
import {NavigationEvent} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  tickets : TicketModel[] = [];

  constructor(private ticketService: TicketService, private router : Router) {
  }

  ngOnInit(): void {
    this.getAllTickets();
  }

  getAllTickets() : void {
    this.ticketService.getAllActiveTickets((data) => {
      this.tickets = data;
    });
  }
  onClick(ticket : TicketModel) {
    this.ticketService.setSelectedTicket(ticket);
  }
}
