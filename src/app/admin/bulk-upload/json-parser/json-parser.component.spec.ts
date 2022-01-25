import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonParserComponent } from './json-parser.component';
import {AppModule} from "../../../app.module";
import {RouterTestingModule} from "@angular/router/testing";
import {EditModComponent} from "../../edit-mod/edit-mod.component";
import {UserService} from "../../usersHelper/user.service";
import {HttpService} from "../../../http.service";
import {MockHttpService} from "../../../mockHttp.service";

describe('JsonParserComponent', () => {
  let component: JsonParserComponent;
  let fixture: ComponentFixture<JsonParserComponent>;
  let mockHttp : MockHttpService;

  beforeEach( () => {
    mockHttp = new MockHttpService();
    TestBed.configureTestingModule({
      imports: [AppModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ EditModComponent ],
      providers: [
        UserService,
        {provide: HttpService, useValue: mockHttp}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
