import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TicketModel} from "../ticket/ticket.model";
import {TicketService} from "../ticket.service";
import {NavigationEvent} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  tickets : TicketModel[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.loadTickets();
  }


  loadTickets() {
    this.ticketService.getAllActiveTickets((data) => {
      // for some reason if this is called when going back form ticket component then the data is outdated
      this.tickets = data;
      this.updateSelectedTicket();
    });
  }

  onClick(ticket : TicketModel) {
    this.ticketService.setSelectedTicket(ticket);
  }

  // check if the selected ticket has changed, in case it has update it
  private updateSelectedTicket() {
    for (let i = 0; i < this.tickets.length; i++) {
      if (this.tickets[i].id === this.ticketService.getSelectedTicket().id) {
        if (this.ticketService.selectedTicketHasBeenSet()) {
          this.tickets[i] = this.ticketService.getSelectedTicket();
        }
      }
    }
  }


}
