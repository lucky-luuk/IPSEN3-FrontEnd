
export class TicketModel {
  abbreviationID : string;
  createdBy : any; // temp any type for now
  ticketType : string;
  ticketID : string;
  createdDate : any;
  ticketStatus : string;
  createdByMail : string;
  handler : string;
  message : string;

  constructor() {
    this.abbreviationID = "c1952112-22c8-4129-857f-c0da546c5e69";
    this.createdBy = "jan steen";
    this.ticketType = "nieuwe afkorting";
    this.ticketID = "1234";
    this.createdDate = "01-12-2000";
    this.ticketStatus = "in behandeling";
    this.createdByMail = "jansteen@rijksoverheid.nl";
    this.handler = "Jason Bourne";
    this.message = "Deze afkorting moet worden aangepast aangezien er een typfout in zit"
  }



}
