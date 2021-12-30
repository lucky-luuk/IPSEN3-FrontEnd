import { Injectable } from '@angular/core';
import {HttpService} from "../../http.service";
import {UsersModel} from "./users.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endpoint : string = "/usersHelper";
  private http : HttpService;
  private selectedUser : UsersModel = new UsersModel();
  constructor(private h : HttpService) {
    this.http = h;
  }

  // public getUsersByName(firstname : string, lastname: string, implementation : (data : UsersModel[]) => void) : void {
  //   let parameters = new Map<string, string>();
  //   parameters.set("firstname", firstname);
  //   parameters.set("lastname", lastname);
  //   this.http.get<UsersModel[]>(this.endpoint, parameters, implementation);
  //
  // }
  //
  // public getUsersByOrgIdAndName(firstname : string, lastname : string, orgId : string,
  //                                      implementation : (data : UsersModel[]) => void) : void {
  //   let parameters = new Map<string, string>();
  //   parameters.set("firstname", firstname);
  //   parameters.set("lastname", lastname);
  //   parameters.set("org_id", orgId);
  //   this.http.get<UsersModel[]>(this.endpoint, parameters, implementation);
  // }
  //
  // public getUsersByOrgId(orgId : string, implementation : (data : UsersModel[]) => void) : void {
  //   let parameters = new Map<string, string>();
  //   parameters.set("org_id", orgId);
  //   this.http.get<UsersModel[]>(this.endpoint, parameters, implementation);
  // }
  //
  // public getUsersByStatus(status : string, implementation : (data : UsersModel[]) => void) : void {
  //   let parameters = new Map<string, string>();
  //   parameters.set("status", status);
  //   this.http.get<UsersModel[]>(this.endpoint, parameters, implementation);
  // }

  public getAllUsers(implementation : (data: UsersModel[]) => void ){
    this.http.get<UsersModel[]>("/user", new Map<string, string>(), implementation);
  }

  updateUsers(ticket : UsersModel, implementation : (data : UsersModel[]) => void) {
    this.http.put<UsersModel[]>("/ticket", [ticket, ticket], implementation);
  }

  setSelectedUser(u : UsersModel) {
    this.selectedUser = u;
  }

  getSelectedUser() : UsersModel {
    return this.selectedUser;
  }

  public getUsers() {
    let users = [];
    users.push(new UsersModel());
    users.push(new UsersModel());
    users.push(new UsersModel());
    users.push(new UsersModel());
    users.push(new UsersModel());
    return users;
  }
}
