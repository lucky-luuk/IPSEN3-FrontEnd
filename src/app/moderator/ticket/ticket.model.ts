import {AbbreviationModel} from "../../afkoteek/search/abbreviation-list/abbreviation.model";

export class TicketModel {
  id : string;
  message : string;
  createDate : string;
  accountId : any;
  abbreviation : AbbreviationModel;
  statusName : string;
  type : string;

  constructor() {
    this.id = "";
    this.message = "";
    this.createDate = "";
    this.abbreviation = new AbbreviationModel();
    this.statusName = "";
    this.type = "";
  }
}
