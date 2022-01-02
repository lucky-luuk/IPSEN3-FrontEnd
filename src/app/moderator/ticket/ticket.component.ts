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
import {AdminSavePopupComponent} from "../../admin/edit-mod/admin-save-popup/admin-save-popup.component";
import {ModTicketSavePopupComponent} from "./mod-ticket-save-popup/mod-ticket-save-popup.component";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotSavedPopupComponent} from "./not-saved-popup/not-saved-popup.component";


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  ticketHasBeenSelected = false;
  private _model: TicketModel = new TicketModel();
  account: AccountModel = new AccountModel();
  // changed in new-abbriation-component with 2 way databinding
  abbreviation: AbbreviationModel = new AbbreviationModel();


  constructor(private ticketService: TicketService, private abbrService: AbbreviationService, private accountService: AccountService, private router: Router, private modalService: NgbModal) {
    this.init();
    // make sure the page is reloaded every time
    this.router.events.subscribe((event) => {
      this.init();
    });

  }

  init() {
    this._model = this.ticketService.getSelectedTicket();
    this.ticketHasBeenSelected = this._model.id !== 0;
    if (this.ticketHasBeenSelected) {
      // wont be null, but just make ts shut up
      if (this._model.temporaryAbbreviation != null)
        this.abbreviation = this._model.temporaryAbbreviation;

      this.accountService.getAccountDetailsFromId(this._model.accountId, (data) => {
        this.account = data;
      });
    }
  }

  ngOnInit(): void {
  }

  // create a new abbreviation and delete the ticket
  onSaveAbbreviation() {
    this.abbrService.postAbbreviations([this.abbreviation]);
    this.ticketService.deleteTickets([this._model], () => {
    });
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
  validator: any;

  onChangeAbbreviation() {
    // send the same abbreviation, api looks at id only when deciding what abbr to change
    let ref = this.modalService.open(ModTicketSavePopupComponent);
    ref.componentInstance.onClose = () => {
      this.abbrService.changeAbbreviation(this.abbreviation, this.abbreviation);
      this.closeTicket()
    }
  }

  private closeTicket() {
    this.ticketService.deleteTickets([this._model], () => {
    });
    this.ticketHasBeenSelected = false;
    this.router.navigate(["moderator", "overview"]);
  }

  setTicketStatus(data: string) {
    this._model.statusName = data;
    this.ticketService.updateTicket(this._model, () => {
    });
  }


  get model(): TicketModel {
    return this._model;
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

  backToOverview() {
    let ref = this.modalService.open(NotSavedPopupComponent);
    ref.componentInstance.data = {afkorting: this.abbreviation.name, beschrijving: this.abbreviation.description}
    ref.componentInstance.onClose = () => {
      this.abbrService.changeAbbreviation(this.abbreviation, this.abbreviation);
      this.closeTicket();
    }
  }
}


