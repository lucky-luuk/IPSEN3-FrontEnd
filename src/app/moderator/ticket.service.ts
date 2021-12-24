import { Injectable } from '@angular/core';
import {HttpService} from "../http.service";
import {TicketModel} from "./ticket/ticket.model";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private selectedTicket : TicketModel = new TicketModel();

  constructor(private http : HttpService) { }

  getAllTickets(implementation : (data : TicketModel[]) => void) {
    this.http.get<TicketModel[]>("/ticket", new Map<string, string>(),implementation);
  }

  setSelectedTicket(t : TicketModel) {
    this.selectedTicket = t;
  }
  getSelectedTicket() : TicketModel {
    return this.selectedTicket;
  }
}
