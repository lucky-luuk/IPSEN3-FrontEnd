import { Injectable } from '@angular/core';
import {HttpService} from "./../../http.service";
import {ticketModel} from "./ticket.model";

@Injectable({
  providedIn: 'root'
})
export class AbbreviationService {
  private endpoint : string = "/ticket";
  private http : HttpService;
  constructor(private h : HttpService) {
    this.http = h;
  }

  public getTicketByID(id : string, implementation : (data : ticketModel[]) => void) : void {
    let parameters = new Map<string, string>();
    parameters.set("id", id);
    this.http.get<ticketModel[]>(this.endpoint, parameters, implementation);

  }


}
