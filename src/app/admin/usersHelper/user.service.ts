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

  public getAllUsers(implementation : (data: UsersModel[]) => void ){
    this.http.get<UsersModel[]>("/account", new Map<string, string>(), implementation);
  }

  updateUsers(user : UsersModel, implementation : (data : UsersModel[]) => void) {
    this.http.put<UsersModel[]>("/account/mod", [user, user], implementation);
  }

  getAllMods(implementation : (data : UsersModel[]) => void){
    this.http.get<UsersModel[]>("/account/mod", new Map<string, string>(), implementation);
  }


  public getUsers(implementation : (data : UsersModel[]) => void) {
    let parameters = new Map<string, string>();
    this.http.get<UsersModel[]>("/account/mod", parameters, implementation);
  }

  public getUsersById(name: string, implementation : (data : UsersModel) => void) {
    let parameters = new Map<string, string>();
    parameters.set('id', name);
    this.http.get<UsersModel>("/account" , parameters, implementation);

  }

  setUsers() {
    this.getUsers((data) => {
      this.users = data;
    })
  }

  getModUsers() {
    return this.users;
  }
}
