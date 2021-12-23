import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/http.service';
import { MockHttpService } from 'src/app/mockHttp.service';
import { UserService } from '../usersHelper/user.service';
import { UsersModel } from '../usersHelper/users.model';

import { AdminOverviewComponent } from './admin-overview.component';

describe('OverviewComponent', () => {
  let component: AdminOverviewComponent;
  let fixture: ComponentFixture<AdminOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminOverviewComponent
      ],
      providers: [
        {provide: UserService, useClass: UserService},
        {provide: HttpService, useClass: MockHttpService},
        {provide: HttpClient, useClass: HttpClient},
        {provide: HttpHandler, useClass: HttpHandler},
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AdminOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('schould give', () =>{
    component.onSearch("henk");
  });

  it('#onSearch check if users is filled with filterdUsers.',() =>{
    expect(component.filterdUsers).toEqual(component.users);
    component.filterdUsers = [];
    component.onSearch("");
    expect(component.users).toEqual([]);
  });

  it('#onSearch check if users has data with Henk in it. ',() =>{
    expect(component.filterdUsers).toEqual(component.users);
    component.onSearch("Henk");
    expect(component.users.length).toEqual(5);
  });

});
