import {Component, Input, OnInit} from '@angular/core';
import {TicketModel} from "./ticketModel/ticket.model";
import {TicketService} from "./ticketModel/ticket.service";
import {AbbreviationService} from "../../afkoteek/search/abbreviation-list/abbreviation.service";
import {AbbreviationModel} from "../../afkoteek/search/abbreviation-list/abbreviation.model";


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() model: TicketModel;
  abbreviation : AbbreviationModel;

  constructor(private ticketService : TicketService, private abbrService: AbbreviationService) {
    this.model = new TicketModel();
    this.abbreviation = new AbbreviationModel();
    this.abbrService.getAbbreviationById(this.model.abbreviationID, (data)=>{
      this.abbreviation = data;
    } );
  }

  ngOnInit(): void {
  }


  setTicketType(data : string){
    console.log(data)
  }
}
