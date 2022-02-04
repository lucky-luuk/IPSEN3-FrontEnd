import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModComponent } from './edit-mod.component';
import {HttpService} from "../../../http/http.service";
import {MockHttpService} from "../../../http/mockHttp.service";
import {UserService} from "../../usersHelper/user.service";
import {AppModule} from "../../../app.module";

describe('EditModComponent', () => {
  let component: EditModComponent;
  let fixture: ComponentFixture<EditModComponent>;

  beforeEach(() => {
    let mockHttp = new MockHttpService();
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ EditModComponent ],
      providers: [
        UserService,
        {provide: HttpService, useValue: mockHttp}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(EditModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
