import {Component, Input, OnInit} from '@angular/core';
import {TicketService} from "../../ticket/ticket/ticket.service";
import {TicketModel} from "../../ticket/ticket/ticket.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-ticket-row',
  templateUrl: './ticket-row.component.html',
  styleUrls: ['./ticket-row.component.scss']
})
export class TicketRowComponent implements OnInit {
  @Input() model: TicketModel;

  constructor(private ticketService: TicketService) {
    this.model = new TicketModel();
  }

  ngOnInit(): void {
  }

}
