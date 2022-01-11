import {AbbreviationModel} from "../../afkoteek/search/abbreviation-list/abbreviation.model";

export class TicketModel {
  id : number;
  message : string;
  createDate : string;
  accountId : any;
  temporaryAbbreviation : AbbreviationModel | null;
  statusName : string;
  type : string;
  userName : string;
  userEmail : string;
  userPhone : string;
  removed: boolean;

  constructor() {
    this.id = 0;
    this.message = "";
    this.createDate = "";
    this.temporaryAbbreviation = null;
    this.statusName = "";
    this.type = "";
    this.userName = "";
    this.userEmail = "";
    this.userPhone = "";
    this.removed = false;
  }
}
