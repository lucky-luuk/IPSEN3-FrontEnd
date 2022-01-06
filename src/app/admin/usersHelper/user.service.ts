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

  public getAllUsers(implementation : (data: UsersModel[]) => void ){
    this.http.get<UsersModel[]>("/user", new Map<string, string>(), implementation);
  }

  updateUsers(ticket : UsersModel, implementation : (data : UsersModel[]) => void) {
    this.http.put<UsersModel[]>("/user", [ticket, ticket], implementation);
  }

  setSelectedUser(u : UsersModel) {
    this.selectedUser = u;
  }

  getSelectedUser() : UsersModel {
    return this.selectedUser;
  }

}
