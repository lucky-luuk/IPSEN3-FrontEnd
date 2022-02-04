import {OrganisationModel} from "./organisation.model";

export class AbbreviationModel {
  public static readonly DEFAULT_NAME = "NONE";
  public static readonly DEFAULT_DESCRIPTION = "NONE";
  public static readonly DEFAULT_ID = "NONE";
  id : string;
  name : string;
  description : string;
  organisations : OrganisationModel[];
  accountId : any; // temp any type for now
  isUnderReview : boolean;

  constructor() {
    this.id = AbbreviationModel.DEFAULT_NAME;
    this.name = AbbreviationModel.DEFAULT_DESCRIPTION;
    this.description = AbbreviationModel.DEFAULT_ID;
    this.organisations = [];
    this.accountId = null;
    this.isUnderReview = false;
  }
}
