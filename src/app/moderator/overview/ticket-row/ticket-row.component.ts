import {Component, Input, OnInit} from '@angular/core';
import {TicketService} from "../../ticket/ticketModel/ticket.service";
import {TicketModel} from "../../ticket/ticketModel/ticket.model";

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
