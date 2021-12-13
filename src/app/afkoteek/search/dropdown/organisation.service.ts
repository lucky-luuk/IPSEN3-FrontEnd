import { Injectable } from '@angular/core';
import {HttpService} from "../../../http.service";
import {OrganisationModel} from "../abbreviation-list/organisation.model";

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor(private http : HttpService) { }

  getAllOrganisations(implementation : (data : OrganisationModel[]) => void) : void {
    let parameters = new Map<string, string>();
    this.http.get<OrganisationModel[]>("/organisation", parameters, implementation);
  }
}
