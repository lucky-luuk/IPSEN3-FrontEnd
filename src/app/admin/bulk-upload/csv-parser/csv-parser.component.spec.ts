import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvParserComponent } from './csv-parser.component';
import {MockHttpService} from "../../../mockHttp.service";
import {AppModule} from "../../../app.module";
import {RouterTestingModule} from "@angular/router/testing";
import {EditModComponent} from "../../edit-mod/edit-mod.component";
import {UserService} from "../../usersHelper/user.service";
import {HttpService} from "../../../http.service";

describe('CsvParserComponent', () => {
  let component: CsvParserComponent;
  let fixture: ComponentFixture<CsvParserComponent>;
  let mockHttp : MockHttpService;

  beforeEach( () => {
    mockHttp = new MockHttpService();
    TestBed.configureTestingModule({
      imports: [AppModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ EditModComponent ],
      providers: [
        {provide: HttpService, useValue: mockHttp}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
