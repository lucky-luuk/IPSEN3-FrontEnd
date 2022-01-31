import { Injectable } from '@angular/core';
import {HttpService} from "../../http.service";
import {OrganisationModel} from "../../afkoteek/search/abbreviation-list/organisation.model";

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor(private http : HttpService) { }

  getAllOrganisations(implementation : (data : OrganisationModel[]) => void) : void {
    let parameters = new Map<string, string>();
    this.http.get<OrganisationModel[]>("/organisation", parameters, implementation);
  }

  postOrganisations(organisations : OrganisationModel[]) : void {
    this.http.post<OrganisationModel[]>("/organisation", organisations, (data) => {});
  }

  changeOrganisation(organisation1 : OrganisationModel, organisation2 : OrganisationModel) {
    this.http.put<OrganisationModel[]>("/organisation", [organisation1, organisation2], (data) => {});
  }

  deleteOrganisation(organisation : OrganisationModel) {
    this.http.put<OrganisationModel[]>("/organisation", [organisation], (data) => {});
  }
}
