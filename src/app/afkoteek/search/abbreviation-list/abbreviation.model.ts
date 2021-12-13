import {OrganisationModel} from "./organisation.model";

export class AbbreviationModel {
  id : string;
  name : string;
  description : string;
  organisations : OrganisationModel[];
  createdBy : any; // temp any type for now
  isUnderReview : boolean;

  constructor() {
    this.id = "NONE";
    this.name = "NONE";
    this.description = "NONE";
    this.organisations = [];
    this.createdBy = null;
    this.isUnderReview = false;
  }
}
