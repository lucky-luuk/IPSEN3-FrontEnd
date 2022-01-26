import { Injectable } from '@angular/core';
import {HttpService} from "../../../http.service";
import {AbbreviationModel} from "./abbreviation.model";

@Injectable({
  providedIn: 'root'
})
export class AbbreviationService {
  private endpoint : string = "/abbreviation";

  constructor(private http : HttpService) {
  }

  public getAbbreviationsByName(name : string, implementation : (data : AbbreviationModel[]) => void, onFail : () => void) : void {
    let parameters = new Map<string, string>();
    parameters.set("name", name);
    this.http.get<AbbreviationModel[]>(this.endpoint, parameters, implementation, onFail);

  }

  public getAbbreviationByOrgIdAndName(name : string, orgId : string,
                                       implementation : (data : AbbreviationModel[]) => void, onFail : () => void) : void {
    let parameters = new Map<string, string>();
    parameters.set("name", name);
    parameters.set("org_id", orgId);
    this.http.get<AbbreviationModel[]>(this.endpoint, parameters, implementation, onFail);
  }

  public geAbbreviationByOrgId(orgId : string, implementation : (data : AbbreviationModel[]) => void, onFail : () => void, amount : number = -1) : void {
    let parameters = new Map<string, string>();
    parameters.set("org_id", orgId);
    if (amount !== -1)
      parameters.set("max_amount", "" + amount);
    this.http.get<AbbreviationModel[]>(this.endpoint, parameters, implementation, onFail);
  }

  public getAbbreviationById(id : string, implementation : (data : AbbreviationModel) => void, onFail : () => void) : void {
    let parameters = new Map<string, string>();
    parameters.set("id", id);
    this.http.get<AbbreviationModel>(this.endpoint, parameters, implementation, onFail);
  }

  public postAbbreviations(abbr : AbbreviationModel[]) : void {
    this.http.post<AbbreviationModel[]>(this.endpoint, abbr, (data) => {});
  }

  public changeAbbreviation(abbr1 : AbbreviationModel, abbr2 : AbbreviationModel) : void {
    let body = [abbr1, abbr2];
    this.http.put<AbbreviationModel[]>(this.endpoint, body, (data) => {});
  }

  public deleteAbbreviation(abbrs : AbbreviationModel[]) : void {
    this.http.delete<AbbreviationModel[]>(this.endpoint, abbrs, (data) => {});
  }

}
