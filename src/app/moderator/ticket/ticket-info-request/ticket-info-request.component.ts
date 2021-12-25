import {Component, Input, OnInit} from '@angular/core';
import {TicketModel} from "../ticket.model";

@Component({
  selector: 'app-ticket-info-request',
  templateUrl: './ticket-info-request.component.html',
  styleUrls: ['./ticket-info-request.component.scss']
})
export class TicketInfoRequestComponent implements OnInit {
  @Input() ticket : TicketModel;
  constructor() {
    this.ticket = new TicketModel();
  }

  ngOnInit(): void {
  }

}
