import {Component, Input, OnInit} from '@angular/core';
import {TicketModel} from "../../ticket/ticket.model";
import {TicketService} from "../../ticket.service";

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
