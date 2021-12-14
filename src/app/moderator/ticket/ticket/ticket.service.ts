import { Injectable } from '@angular/core';
import {HttpService} from "../../../http.service";
import {TicketModel} from "./ticket.model";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private endpoint : string = "/ticket";
  private http : HttpService;
  constructor(private h : HttpService) {
    this.http = h;
  }

  public getTicketsByID(ID : string, implementation : (data : TicketModel[]) => void) : void {
    let parameters = new Map<string, string>();
    parameters.set("name", ID);
    this.http.get<TicketModel[]>(this.endpoint, parameters, implementation);

  }

  public getTickets(): TicketModel[] {
    let tickets = [];
    tickets.push(new TicketModel());
    tickets.push(new TicketModel());
    tickets.push(new TicketModel());
    tickets.push(new TicketModel());
    tickets.push(new TicketModel());
    tickets.push(new TicketModel());
    tickets.push(new TicketModel());
    tickets.push(new TicketModel());
    tickets.push(new TicketModel());
    tickets.push(new TicketModel());
    tickets.push(new TicketModel());
    tickets.push(new TicketModel());
    tickets.push(new TicketModel());
    tickets.push(new TicketModel());
    tickets.push(new TicketModel());
    return tickets;
  }

}
