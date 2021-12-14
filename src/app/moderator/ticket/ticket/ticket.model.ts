
export class TicketModel {
  abbreviationID : string;
  createdBy : any; // temp any type for now
  ticketType : string;
  ticketID : string;
  createdDate : any;
  ticketStatus : string;

  constructor() {
    this.abbreviationID = "abbreviationID";
    this.createdBy = "jan";
    this.ticketType = "nieuw";
    this.ticketID = "1234";
    this.createdDate = "01-12-2000";
    this.ticketStatus = "in behandeling";
  }



}
