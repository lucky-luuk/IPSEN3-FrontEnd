import {OrganisationModel} from "../../afkoteek/search/abbreviation-list/organisation.model";

export class ticketModel {
  id : string;
  name : string;
  description : string;
  organisations : OrganisationModel[];
  createdBy : any; // temp any type for now
  ticketID : string;
  ticketType: string;
  ticketStatus: string;
  addDate: any; //research how to get date here

  constructor() {
    this.id = "NONE";
    this.name = "NONE";
    this.description = "NONE";
    this.organisations = [];
    this.createdBy = null;
    this.ticketID = "NONE";
    this.ticketType = "NONE";
    this.ticketStatus = "NONE";
    this.addDate = null;
  }
}
