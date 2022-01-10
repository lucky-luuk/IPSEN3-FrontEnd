import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRequestComponent } from './info-request.component';
import {AddComponent} from "../add/add.component";
import {HttpService} from "../../../http.service";
import {AccountService} from "../../../account.service";
import {TicketService} from "../../../moderator/ticket.service";
import {RouterTestingModule} from "@angular/router/testing";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, NgForm} from "@angular/forms";
import {MockHttpService} from "../../../mockHttp.service";
import {TicketModel} from "../../../moderator/ticket/ticket.model";
import {AppModule} from "../../../app.module";

describe('InfoRequestComponent', () => {
  let component: InfoRequestComponent;
  let fixture: ComponentFixture<InfoRequestComponent>;
  let mockHttp : MockHttpService;
  beforeEach( () => {
    mockHttp = new MockHttpService();
     TestBed.configureTestingModule({
      declarations: [ InfoRequestComponent ],
      providers: [
        {provide: HttpService, useValue: mockHttp},
        AccountService,
        TicketService
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        NgbModule,
        FormsModule,
        AppModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(InfoRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("#createTicket should upload ticket to service", () => {
    let data : {name : string, email : string, phone : string, data : string} = {
      name: "this", email: "is", phone: "a", data: "test"
    };
    let newData : TicketModel;
    mockHttp.setData<TicketModel[]>("/ticket", []);
    component.createTicket({form: {value: data}});
    mockHttp.get<TicketModel[]>("/ticket", new Map(), (d) => {
      newData = d[0];
      expect(newData.userEmail).toEqual(data.email);
    });
  });

});
