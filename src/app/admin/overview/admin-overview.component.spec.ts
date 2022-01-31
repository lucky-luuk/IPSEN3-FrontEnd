import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/http/http.service';
import { MockHttpService } from 'src/app/http/mockHttp.service';
import { UserService } from '../usersHelper/user.service';
import { UsersModel } from '../usersHelper/users.model';

import { AdminOverviewComponent } from './admin-overview.component';
import {SearchModeratorComponent} from "./search-moderator/search-moderator.component";
import {UserComponent} from "./user/user.component";
import {AppModule} from "../../app.module";

describe('AdminOverviewComponent', () => {
  let component: AdminOverviewComponent;
  let mockHttp  = new MockHttpService();

  beforeEach(() => {
    component = new AdminOverviewComponent(new UserService(mockHttp));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit should call UserService#getusers', () =>{
    let data = [new UsersModel()];
    data[0].firstName = "henk";
    mockHttp.setData<UsersModel[]>("/account/mod", data);
    component.ngOnInit();
    expect(component.users[0].firstName).toEqual(data[0].firstName);
  });

  it('#onSearch check if users is filled with filterdUsers.',() =>{
    expect(component.filteredUsers).toEqual(component.users);
    component.filteredUsers = [];
    component.onSearch("");
    expect(component.users).toEqual([]);
  });

  it('#onSearch should fill filteredUsers. ',() =>{
    let data = [new UsersModel()];
    data[0].firstName = "henk";
    mockHttp.setData<UsersModel[]>("/account/mod", data);
    component.ngOnInit();

    expect(component.filteredUsers).toEqual(component.users);
    component.onSearch("Bob");
    expect(component.filteredUsers.length).toEqual(0);
  });

});
