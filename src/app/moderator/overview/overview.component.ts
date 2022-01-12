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
    this.getAllTickets();
    // make sure we reset the tickets on reload
    this.router.events.subscribe((event) => {
      this.getAllTickets();
    });
  }

  ngOnInit(): void {

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
