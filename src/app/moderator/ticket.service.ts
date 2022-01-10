import { Injectable } from '@angular/core';
import {HttpService} from "../http.service";
import {TicketModel} from "./ticket/ticket.model";
import {UsersModel} from "../admin/usersHelper/users.model";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private selectedTicket : TicketModel = new TicketModel();

  constructor(private http : HttpService) { }

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
    return this.selectedTicket;
  }


}
