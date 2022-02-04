import {Component, Input, OnInit} from '@angular/core';
import {TicketModel} from "../../ticket.model";
import {TicketService} from "../../ticket.service";
import {TicketTypeModel} from "../../ticket-detail/ticketType.model";

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

  getTypeDisplayName() : string {
    if (this.model.type === TicketTypeModel.ADD_ABBREVIATION)
      return "Afkorting toevoegen";
    if (this.model.type === TicketTypeModel.INFO)
      return "Informatie verzoek";
    return "Gerapporteerde afkorting";
  }

}
