import { OrganisationModel } from "../afkoteek/search/abbreviation-list/organisation.model";

export class ModeratorModel {
  name : string;
  lastname : string;
  createDate : Date;
  email : string;
  phone : string;
  organisatie : OrganisationModel;

  constructor() {
    this.name = '';
    this.lastname = '';
    this.createDate = new Date();
    this.email = '';
    this.phone = '';
    this.organisatie = new OrganisationModel;
  }
}
