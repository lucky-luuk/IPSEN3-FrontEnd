import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from "../http/http.service";
import {TicketModel} from "./ticket/ticket.model";
import {UsersModel} from "../admin/usersHelper/users.model";
import {OrganisationModel} from "../afkoteek/search/abbreviation-list/organisation.model";
import {AbbreviationModel} from "../afkoteek/search/abbreviation-list/abbreviation.model";
import {tick} from "@angular/core/testing";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private selectedTicket : TicketModel | null = null;

  constructor(private http : HttpService) { }

  getAllActiveTickets(implementation : (data : TicketModel[]) => void) {
    let map = new Map<string, string>();
    map.set("removed", "false");
    this.http.get<TicketModel[]>("/ticket", map,implementation);
  }

  getTicketById(id : number, implementation : (data : TicketModel) => void, onFail : () => void) {
    let map = new Map<string, string>();
    map.set("id", id + "");
    this.http.get<TicketModel>("/ticket", map, implementation, onFail);
  }

  getAllTickets(implementation : (data : TicketModel[]) => void) {
    this.http.get<TicketModel[]>("/ticket", new Map<string, string>(),implementation);
  }

  createTickets(ticket : TicketModel[], implementation : (data : TicketModel[]) => void) {
    this.http.post<TicketModel[]>("/ticket", ticket, implementation);
  }

  deleteTickets(tickets : TicketModel[], implementation : (data : TicketModel[]) => void) {
    this.http.delete<TicketModel[]>("/ticket", tickets, implementation);
  }

  updateTicket(ticket : TicketModel, implementation : (data : TicketModel[]) => void) {
    this.http.put<TicketModel[]>("/ticket", [ticket, ticket], implementation);
  }

  setSelectedTicket(t : TicketModel) {
    this.selectedTicket = t;
  }
  getSelectedTicket() : TicketModel {
    if (this.selectedTicket === null)
      return new TicketModel();
    return this.selectedTicket;
  }
  selectedTicketHasBeenSet() : boolean {
    return !(this.selectedTicket === null);
  }

  hasTicketChangedOnServer(ticket : TicketModel, onChanged : (newTicket : TicketModel) => void, onSame : () => void) {
    this.getTicketById(ticket.id, (newTicket) => {
      if (this.isSameTicket(ticket, newTicket)) {
        onSame();
      }
      else {
        onChanged(newTicket);
      }
    }, () => {});
  }

  isSameTicket(ticket1 : TicketModel, ticket2 : TicketModel) : boolean {
    if (ticket1.id === ticket2.id &&
        ticket1.statusName === ticket2.statusName &&
        ticket1.accountId === ticket2.accountId &&
        ticket1.removed === ticket2.removed &&
        ticket1.message === ticket2.message &&
        ticket1.createDate === ticket2.createDate &&
        ticket1.type === ticket2.type &&
        ticket1.userEmail === ticket2.userEmail &&
        ticket1.userName === ticket2.userName &&
        ticket1.userPhone === ticket2.userPhone) {
      if (this.areTemporaryAbbreviationsSame(ticket1.temporaryAbbreviation, ticket2.temporaryAbbreviation)) {
        return this.areOrganisationsSame(ticket1.temporaryAbbreviation?.organisations,
                                         ticket2.temporaryAbbreviation?.organisations);
      }
    }
    return false;
  }
  // does not check organisations!!!
  areTemporaryAbbreviationsSame(abbr1 : AbbreviationModel | null, abbr2 : AbbreviationModel | null) {
    if (abbr1 === abbr2)
      return true;
    if (abbr1 === null || abbr2 === null)
      return false;
    return abbr1.id === abbr2.id &&
           abbr1.name === abbr2.name &&
           abbr1.accountId === abbr2.accountId &&
           abbr1.description === abbr2.description &&
           abbr1.isUnderReview === abbr2.isUnderReview;
  }

  areOrganisationsSame(orgs1 : OrganisationModel[] | undefined, orgs2 : OrganisationModel[] | undefined) : boolean{
    if (orgs1 === orgs2)
      return true;
    if (orgs1 === undefined || orgs2 === undefined)
      return false;
    // if both are empty return true
    if (orgs1.length === 0 && orgs2.length === 0) return true;
    // if they are not the same length return false
    if (orgs1.length !== orgs2.length) return false;
    // check if organisations are the same
    for (let i = 0; i < orgs1.length; i++) {
      if (orgs1[i].id !== orgs2[i].id || orgs1[i].name !== orgs2[i].name) {
         return false;
      }
    }
    return true;
  }
  // for testing purposes!!
  createSameTicket(ticketId : number, abbrName : string, orgName : string) : [TicketModel, TicketModel] {
    let t1 = new TicketModel();
    let t2 = new TicketModel();
    t1.id = ticketId;
    t2.id = ticketId;
    t1.temporaryAbbreviation = new AbbreviationModel();
    t2.temporaryAbbreviation = new AbbreviationModel();
    t1.temporaryAbbreviation.name = abbrName;
    t2.temporaryAbbreviation.name = abbrName;
    t1.temporaryAbbreviation.organisations = [];
    let org1 = new OrganisationModel();
    org1.id = orgName;
    let org2 = new OrganisationModel();
    org2.id = orgName;
    t1.temporaryAbbreviation.organisations.push(org1);
    t2.temporaryAbbreviation.organisations.push(org2);
    return [t1, t2];
  }
  // do a deep copy!!!
  copyTicket(ticket : TicketModel) : TicketModel {
    let t = new TicketModel();
    t.message = ticket.message;
    t.id = ticket.id;
    t.statusName = ticket.statusName;
    t.type = ticket.type;
    t.removed = ticket.removed;
    t.userPhone = ticket.userPhone;
    t.userName = ticket.userName;
    t.userEmail = ticket.userEmail;
    t.createDate = ticket.createDate;
    t.accountId = ticket.accountId;
    if (ticket.temporaryAbbreviation !== null) {
      t.temporaryAbbreviation = new AbbreviationModel();
      t.temporaryAbbreviation.id = ticket.temporaryAbbreviation.id;
      t.temporaryAbbreviation.name = ticket.temporaryAbbreviation.name;
      t.temporaryAbbreviation.accountId = ticket.temporaryAbbreviation.accountId;
      t.temporaryAbbreviation.description = ticket.temporaryAbbreviation.description;
      t.temporaryAbbreviation.isUnderReview = ticket.temporaryAbbreviation.isUnderReview;
      if (ticket.temporaryAbbreviation.organisations !== undefined) {
        t.temporaryAbbreviation.organisations = [];
        for (let i = 0; i < ticket.temporaryAbbreviation.organisations.length; i++) {
          let org = new OrganisationModel();
          org.id = ticket.temporaryAbbreviation.organisations[i].id;
          org.name = ticket.temporaryAbbreviation.organisations[i].name;
          t.temporaryAbbreviation.organisations.push(org);
        }
      }
    }
    else {
      t.temporaryAbbreviation = null;
    }
    return t;
  }
}
