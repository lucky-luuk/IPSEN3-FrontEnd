import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {TicketModel} from "../ticket.model";
import {AbbreviationService} from "../../../afkoteek/search/abbreviation-list/abbreviation.service";
import {AbbreviationModel} from "../../../afkoteek/search/abbreviation-list/abbreviation.model";
import {AccountModel} from "../../../account/account.model";
import {AccountService} from "../../../account/account.service";
import {TicketTypeModel} from "./ticketType.model";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TicketStatusModel} from "./ticketStatus.model";
import {TicketHasBeenEditedPopupComponent} from "./ticket-popup/ticket-has-been-edited-popup/ticket-has-been-edited-popup.component";
import {TicketTypeDropdownComponent} from "./ticket-type-dropdown/ticket-type-dropdown.component";
import {ReportedAbbreviationComponent} from "./reported-abbreviation/reported-abbreviation.component";
import {NewAbbreviationComponent} from "./new-abbreviation/new-abbreviation.component";
import {DeleteTicketPopupComponent} from "./ticket-popup/delete-ticket-popup/delete-ticket-popup.component";
import {HandleTicketPopupComponent} from "./ticket-popup/handle-ticket-popup/handle-ticket-popup.component";
import { TicketService } from '../ticket.service';
import { NotSavedPopupComponent } from './ticket-popup/not-saved-popup/not-saved-popup.component';
import {TicketHandlerDropdownComponent} from "./ticket-handler-dropdown/ticket-handler-dropdown.component";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @ViewChild(TicketTypeDropdownComponent) ticketTypDropDown : any;
  @ViewChild(ReportedAbbreviationComponent) reportedAbbreviation : any | undefined = undefined;
  @ViewChild(NewAbbreviationComponent) newAbbreviation : any | undefined = undefined;
  @ViewChild(TicketHandlerDropdownComponent) ticketHandlerDropdown : any;

  ticketHasBeenSelected = false;
  private oldData = new TicketModel();
  model: TicketModel = new TicketModel();
  abbreviation: AbbreviationModel = new AbbreviationModel();

  constructor(private ticketService: TicketService, private abbrService: AbbreviationService, private accountService: AccountService, private router: Router, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.init();
  }

  getTicketTypeDisplayName() {
    if (this.model.type === TicketTypeModel.INFO)
      return "Informatie verzoek";
    if (this.model.type === TicketTypeModel.ADD_ABBREVIATION)
      return "Verzoek om afkorting toe te voegen";
    return "Gerapporteerde afkorting";
  }

  init() {
    this.setTicketData(this.ticketService.getSelectedTicket());
    this.ticketHasBeenSelected = this.model.id !== 0;
    // wont be null, but just make ts shut up
    if (this.model.temporaryAbbreviation !== null)
      this.abbreviation = this.model.temporaryAbbreviation;

    // if ticket has been changed on the server
    this.ticketService.hasTicketChangedOnServer(this.oldData, (newTicket) => {
      this.handleTicketHasBeenChangedOnServer(newTicket);
    }, () => {});
  }

  saveTicket() {
    this.ticketService.hasTicketChangedOnServer(this.oldData, (newTicket) => {
      this.onTicketHasBeenChangedOnServer(newTicket);
    }, () => {
      this.deleteOrSaveTicket();
    });
  }

  deleteOrSaveTicket() {
    if (this.model.statusName === TicketStatusModel.CLOSED) {
      let ref = this.modalService.open(DeleteTicketPopupComponent).componentInstance;
      ref.onDeleteCalled = () => {
        this.deleteTicket();
      };
    }
    else {
      let ref = this.modalService.open(NotSavedPopupComponent).componentInstance;
      ref.data = this.model;
      ref.onClose = () => {
        this.ticketService.updateTicket(this.model, () => {});
      }
    }
  }

  handleTicket() {
    let ref = this.modalService.open(HandleTicketPopupComponent).componentInstance;
    ref.onHandled = () => {
      this.ticketService.hasTicketChangedOnServer(this.oldData, (newTicket) => {
        this.onTicketHasBeenChangedOnServer(newTicket);
      }, () => {
        this.model.statusName = TicketStatusModel.HANDLED;
        if (this.model.type === TicketTypeModel.ADD_ABBREVIATION) {
          this.abbrService.postAbbreviations([this.abbreviation]);
        }
        else if (this.model.type === TicketTypeModel.REPORT) {
          this.abbrService.changeAbbreviation(this.abbreviation, this.abbreviation);
        }
        else { // this._model.type === TicketTypeModel.INFO
          // nothing for now.... .. .
        }
        this.removeTicket(this.model);
      });
    }
  }

  deleteTicket() {
    this.ticketService.hasTicketChangedOnServer(this.oldData, (newTicket) => {
      this.onTicketHasBeenChangedOnServer(newTicket);
    }, () => {
      this.removeTicket(this.model);
    });
  }

  backToOverview() {
    if (!this.ticketService.isSameTicket(this.oldData, this.model)){
        this.saveTicket();
    }else{
      this.router.navigate(["moderator", "overzicht"]);
    }
  }

  getOldData() : TicketModel {
    return this.oldData;
  }
  setTicketStatus(data: string) {
    this.model.statusName = data;
  }
  setTicketAccountId(id : string) {
    this.model.accountId = id;
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

  private setTicketData(m : TicketModel) {
    this.model = m;
    this.oldData = this.ticketService.copyTicket(m);
  }

  private removeTicket(ticket : TicketModel) {
    ticket.removed=true;
    this.ticketService.updateTicket(ticket, ()=>{});
    this.ticketHasBeenSelected = false;
    this.router.navigate(["moderator", "overzicht"]);
  }

  private onTicketHasBeenChangedOnServer(newTicket : TicketModel) {
    let ref = this.modalService.open(TicketHasBeenEditedPopupComponent).componentInstance;
    ref.onReloadPage = () => {
      // reload the page
      this.ngOnInit();
    };
  }

  private handleTicketHasBeenChangedOnServer(newTicket : TicketModel) {
    this.setTicketData(newTicket);

    if (this.ticketTypDropDown !== undefined)
      this.ticketTypDropDown.selectStatus(newTicket.statusName);

    //set org features for reportedAbbreviationComponent
    this.setViewChildDropdown(this.reportedAbbreviation);

    // set org features for newAbbreviationComponent
    this.setViewChildDropdown(this.newAbbreviation);

    if (this.ticketHandlerDropdown) {
      this.ticketHandlerDropdown.selectHandler(this.model.accountId);
    }
  }
  private setViewChildDropdown(viewchild : any) {
    if (viewchild !== undefined) {
      if (this.model.temporaryAbbreviation !== null) {
        let abbr = this.model.temporaryAbbreviation;
        if (abbr.organisations !== undefined)
          viewchild.setOrganisationDropDown(abbr.organisations[0]);
      }
    }
  }
}


