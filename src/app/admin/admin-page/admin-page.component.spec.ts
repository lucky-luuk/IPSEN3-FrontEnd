import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageComponent } from './admin-page.component';
import {AdminOverviewComponent} from "../overview/admin-overview.component";
import {HttpService} from "../../http.service";
import {MockHttpService} from "../../mockHttp.service";
import {UserService} from "../usersHelper/user.service";
import {AppModule} from "../../app.module";

describe('AdminPageComponent', () => {
  let component: AdminPageComponent;
  let fixture: ComponentFixture<AdminPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ AdminPageComponent, AdminOverviewComponent ],
      providers: [{provide: HttpService, useClass: MockHttpService}, UserService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
