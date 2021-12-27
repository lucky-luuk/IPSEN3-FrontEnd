import { Injectable } from "@angular/core";
import { OrganisationModel } from "../afkoteek/search/abbreviation-list/organisation.model";

export class ModeratorModel {
  name : string;
  lastname : string;
  createDate : Date;
  Email : any;
  phone : string;
  organisatie : OrganisationModel;

  constructor(name: string, lastName: string, email : any, phone: string, org: OrganisationModel) {
    this.name = name;
    this.lastname = lastName;
    this.createDate = new Date();
    this.Email = email;
    this.phone = phone;
    this.organisatie = org;
  }
}
