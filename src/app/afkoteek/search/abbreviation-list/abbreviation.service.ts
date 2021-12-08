import { Injectable } from '@angular/core';
import {HttpService} from "../../../http.service";
import {AbbreviationModel} from "./abbreviation.model";

@Injectable({
  providedIn: 'root'
})
export class AbbreviationService {
  private endpoint : string = "/abbreviation";
  private http : HttpService;
  constructor(private h : HttpService) {
    this.http = h;
  }

  public getAbbreviationsByName(name : string, implementation : (data : AbbreviationModel[]) => void) : void {
    var parameters = new Map<string, string>();
    parameters.set("name", name);
    this.http.get<AbbreviationModel[]>(this.endpoint, parameters, implementation);
  }

}
