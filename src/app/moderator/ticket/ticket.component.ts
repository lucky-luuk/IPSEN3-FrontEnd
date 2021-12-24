import {Component, Input, OnInit} from '@angular/core';
import {TicketModel} from "./ticket.model";
import {AbbreviationService} from "../../afkoteek/search/abbreviation-list/abbreviation.service";
import {AbbreviationModel} from "../../afkoteek/search/abbreviation-list/abbreviation.model";
import {TicketService} from "../ticket.service";
import {AccountModel} from "../../account.model";
import {AccountService} from "../../account.service";
import {TicketTypeModel} from "./ticketType.model";


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  model: TicketModel;
  account : AccountModel = new AccountModel();
  abbreviation : AbbreviationModel = new AbbreviationModel();

  constructor(private ticketService : TicketService, private abbrService: AbbreviationService, private accountService : AccountService) {
    this.model = this.ticketService.getSelectedTicket();
    // wont be null, but just make ts shut up
    if (this.model.temporaryAbbreviation != null)
      this.abbreviation = this.model.temporaryAbbreviation;

    this.accountService.getAccountDetails(this.model.accountId, (data) => {
      this.account = data;
    });
  }

  ngOnInit(): void {
  }


  setTicketType(data : string){
  }

  getAddAbbreviationTicketType() {
    return TicketTypeModel.ADD_ABBREVIATION;
  }
}
