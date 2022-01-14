import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {TicketModel} from "./ticket.model";
import {AbbreviationService} from "../../afkoteek/search/abbreviation-list/abbreviation.service";
import {AbbreviationModel} from "../../afkoteek/search/abbreviation-list/abbreviation.model";
import {TicketService} from "../ticket.service";
import {AccountModel} from "../../account.model";
import {AccountService} from "../../account.service";
import {TicketTypeModel} from "./ticketType.model";
import {Router} from "@angular/router";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotSavedPopupComponent} from "./not-saved-popup/not-saved-popup.component";
import {TicketStatusModel} from "./ticketStatus.model";
import {TicketHasBeenEditedPopupComponent} from "./ticket-has-been-edited-popup/ticket-has-been-edited-popup.component";
import {ModTicketSavePopupComponent} from "./mod-ticket-save-popup/mod-ticket-save-popup.component";
import {TicketTypeDropdownComponent} from "./ticket-type-dropdown/ticket-type-dropdown.component";
import {ReportedAbbreviationComponent} from "./reported-abbreviation/reported-abbreviation.component";
import {NewAbbreviationComponent} from "./new-abbreviation/new-abbreviation.component";
import {DeleteTicketPopupComponent} from "./delete-ticket-popup/delete-ticket-popup.component";

/* FLOW
* Verwijder -> deleteTicket()
* if (ticket is changed on server) {
*   open ticketHasChanged popup
* }
* else {
*   ticket.removed = true
*   service.updateTicket(ticket)
* }
*
* Opslaan -> saveTicket()
* if (ticket is changed on server) {
*   open ticketHasChanged popup
* }
* else {
*   handleTicket()
* }
*/

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @ViewChild(TicketTypeDropdownComponent) ticketTypDropDown : any;
  @ViewChild(ReportedAbbreviationComponent) reportedAbbreviation : ReportedAbbreviationComponent | undefined = undefined;
  @ViewChild(NewAbbreviationComponent) newAbbreviation : NewAbbreviationComponent | undefined = undefined;

  ticketHasBeenSelected = false;
  private oldData = new TicketModel();
  private _model: TicketModel = new TicketModel();
  account: AccountModel = new AccountModel();
  abbreviation: AbbreviationModel = new AbbreviationModel();

  constructor(private ticketService: TicketService, private abbrService: AbbreviationService, private accountService: AccountService, private router: Router, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this._model = this.ticketService.getSelectedTicket();
    this.oldData = this.ticketService.copyTicket(this._model);
    this.ticketHasBeenSelected = this._model.id !== 0;
    if (this.ticketHasBeenSelected) {
      // wont be null, but just make ts shut up
      if (this._model.temporaryAbbreviation != null)
        this.abbreviation = this._model.temporaryAbbreviation;

      this.accountService.getAccountDetailsFromId(this._model.accountId, (data) => {
        this.account = data;
      });

      this.ticketService.hasTicketChangedOnServer(this.oldData, (newTicket) => {
        this._model = newTicket;
        this.oldData = this.ticketService.copyTicket(newTicket);
        this.ticketTypDropDown.selectStatus(newTicket.statusName);
        //set org dropdown for reportedAbbreviationComponent
        if (this.reportedAbbreviation !== undefined) {
          if (this.model.temporaryAbbreviation !== null) {
            let abbr = this.model.temporaryAbbreviation;
            if (abbr.organisations !== undefined)
              this.reportedAbbreviation.setOrganisationDropDown(abbr.organisations[0]);
          }
        }
        // set org dropdown for newAbbreviationComponent
        if (this.newAbbreviation !== undefined) {
          if (this.model.temporaryAbbreviation !== null) {
            let abr = this.model.temporaryAbbreviation;
            if (abr.organisations !== undefined)
              this.newAbbreviation.setOrganisationDropdown(abr.organisations[0]);
          }
        }

      }, () => {});
    }
  }

  saveTicket() {
    this.ticketService.hasTicketChangedOnServer(this.oldData, (newTicket) => {
      this.onTicketHasBeenChangedOnServer(newTicket);
    }, () => {
      this.handleTicket();
    });
  }

  private handleTicket() {
    if (this.model.statusName === TicketStatusModel.CLOSED) {

      let ref = this.modalService.open(DeleteTicketPopupComponent).componentInstance;
      ref.onDeleteCalled = () => {
        if (this.model.type === TicketTypeModel.ADD_ABBREVIATION) {

        }
        else if (this.model.type === TicketTypeModel.REPORT) {

        }
        else { // type === INFO

        }
        this.deleteTicket();
      };
    }
    else {
      let ref = this.modalService.open(NotSavedPopupComponent).componentInstance;
      ref.data = this._model;
      ref.onClose = () => {
        this.ticketService.updateTicket(this.model, () => {});
      }
    }
  }

  deleteTicket() {
    this.ticketService.hasTicketChangedOnServer(this.oldData, (newTicket) => {
      this.onTicketHasBeenChangedOnServer(newTicket);
    }, () => {
      this.model.removed=true;
      this.ticketService.updateTicket(this.model, ()=>{});
      this.ticketHasBeenSelected = false;
      this.router.navigate(["moderator", "overview"]);
    });
  }

  private onTicketHasBeenChangedOnServer(newTicket : TicketModel) {
    let ref = this.modalService.open(TicketHasBeenEditedPopupComponent).componentInstance;
    ref.onReloadPage = () => {
      // reload the page
      this.ngOnInit();
    };
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
    ref.componentInstance.data = this.model;
    ref.componentInstance.onClose = () => {
      this.saveTicket();
    }
  }

  setTicketStatus(data: string) {
    this._model.statusName = data;
  }
}


