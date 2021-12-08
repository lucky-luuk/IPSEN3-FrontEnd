import {OrganisationModel} from "./organisation.model";

export class AbbreviationModel {
  id : string;
  name : string;
  description : string;
  organisations : OrganisationModel[];
  createdBy : any; // temp any type for now
  isUnderReview : boolean;

  constructor() {
    this.id = "";
    this.name = "";
    this.description = "";
    this.organisations = [];
    this.createdBy = null;
    this.isUnderReview = false;
  }
}
