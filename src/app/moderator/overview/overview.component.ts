import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TicketService} from "../ticket/ticket/ticket.service";
import {TicketModel} from "../ticket/ticket/ticket.model";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  tickets : TicketModel[] = [];

  constructor(private router: Router, private ticketService: TicketService) {
    this.tickets = this.ticketService.getTickets();

  }

  ngOnInit(): void {
  }

  onClick(){
    console.log( this.router.navigate(['/ticket']));
    this.router.navigate(['ticket']);
  }
}
