
export class TicketModel {
  abbreviationID : string;
  createdBy : any; // temp any type for now
  ticketType : string;
  ticketID : string;
  createdDate : any;

  constructor() {
    this.abbreviationID = "abbreviationID";
    this.createdBy = null;
    this.ticketType = "ticketType";
    this.ticketID = "ticketID";
    this.createdDate = null;
  }



}
