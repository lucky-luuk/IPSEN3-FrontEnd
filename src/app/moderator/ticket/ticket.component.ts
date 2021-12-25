import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {TicketModel} from "./ticket.model";
import {AbbreviationService} from "../../afkoteek/search/abbreviation-list/abbreviation.service";
import {AbbreviationModel} from "../../afkoteek/search/abbreviation-list/abbreviation.model";
import {TicketService} from "../ticket.service";
import {AccountModel} from "../../account.model";
import {AccountService} from "../../account.service";
import {TicketTypeModel} from "./ticketType.model";
import {Router} from "@angular/router";
import {TicketTypeDropdownComponent} from "./ticket-type-dropdown/ticket-type-dropdown.component";


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  ticketHasBeenSelected = false;
  model: TicketModel = new TicketModel();
  account : AccountModel = new AccountModel();
  // changed in new-abbriation-component with 2 way databinding
  abbreviation : AbbreviationModel = new AbbreviationModel();


  constructor(private ticketService : TicketService, private abbrService: AbbreviationService, private accountService : AccountService, private router : Router) {
    this.init();
    // make sure the page is reloaded every time
    this.router.events.subscribe((event) => {
      this.init();
    });

  }
  init() {
    this.model = this.ticketService.getSelectedTicket();
    this.ticketHasBeenSelected = this.model.id !== 0;
    if (this.ticketHasBeenSelected) {
      // wont be null, but just make ts shut up
      if (this.model.temporaryAbbreviation != null)
        this.abbreviation = this.model.temporaryAbbreviation;

      this.accountService.getAccountDetailsFromId(this.model.accountId, (data) => {
        this.account = data;
      });
    }
  }
  ngOnInit(): void {
  }

  // create a new abbreviation and delete the ticket
  onSaveAbbreviation() {
    this.abbrService.postAbbreviations([this.abbreviation]);
    this.ticketService.deleteTickets([this.model], () => {});
    this.closeTicket();
  }

  // delete the ticket
  onDeleteTicket() {
    this.closeTicket();
  }

  // delete the ticket and the abbreviation
  onDeleteAbbreviation() {
    this.abbrService.deleteAbbreviation([this.abbreviation]);
    this.closeTicket();
  }

  // change the abbreviation and delette the ticket
  onChangeAbbreviation() {
    // send the same abbreviation, api looks at id only when deciding what abbr to change
    this.abbrService.changeAbbreviation(this.abbreviation, this.abbreviation);
    this.closeTicket();
  }

  private closeTicket() {
    this.ticketService.deleteTickets([this.model], () => {});
    this.ticketHasBeenSelected = false;
    this.router.navigate(["moderator", "overview"]);
  }

  setTicketStatus(data : string) {
    this.model.statusName = data;
    this.ticketService.updateTicket(this.model, () => {});
  }

  getAddAbbreviationTicketType() {
    return TicketTypeModel.ADD_ABBREVIATION;
  }
  getInfoRequestTicketType() {
    return TicketTypeModel.INFO;
  }
  getReportAbbreviationTicketType() {
    return TicketTypeModel.REPORT;
  }
}
