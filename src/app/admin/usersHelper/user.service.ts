import { Injectable } from '@angular/core';
import {HttpService} from "../../http.service";
import {UsersModel} from "./users.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endpoint : string = "/account";
  private http : HttpService;
  users: UsersModel[] = [];


  constructor(private h : HttpService) {
    this.http = h;
  }

  public getUsersByName(firstname : string, lastname: string, implementation : (data : UsersModel[]) => void) : void {
    let parameters = new Map<string, string>();
    parameters.set("firstname", firstname);
    parameters.set("lastname", lastname);
    this.http.get<UsersModel[]>(this.endpoint, parameters, implementation);

  }

  public getUsersByOrgIdAndName(firstname : string, lastname : string, orgId : string,
                                       implementation : (data : UsersModel[]) => void) : void {
    let parameters = new Map<string, string>();
    parameters.set("firstname", firstname);
    parameters.set("lastname", lastname);
    parameters.set("org_id", orgId);
    this.http.get<UsersModel[]>(this.endpoint, parameters, implementation);
  }

  public getUsersByOrgId(orgId : string, implementation : (data : UsersModel[]) => void) : void {
    let parameters = new Map<string, string>();
    parameters.set("org_id", orgId);
    this.http.get<UsersModel[]>(this.endpoint, parameters, implementation);
  }

  public getUsersByStatus(status : string, implementation : (data : UsersModel[]) => void) : void {
    let parameters = new Map<string, string>();
    parameters.set("status", status);
    this.http.get<UsersModel[]>(this.endpoint, parameters, implementation);
  }

  public getUsers(implementation : (data : UsersModel[]) => void) {
    let parameters = new Map<string, string>();
    this.http.get<UsersModel[]>(this.endpoint+'/mod', parameters, implementation);
  }

  public getUsersById(name: string, implementation : (data : UsersModel) => void) {
    let parameters = new Map<string, string>();
    parameters.set('id', name);
    this.http.get<UsersModel>(this.endpoint + '/user', parameters, implementation);

  }

  setUsers() {
    this.getUsers((data) => {
      this.users = data;
    })
  }

  getModUsers() {
    return this.users.slice()
  }
}
