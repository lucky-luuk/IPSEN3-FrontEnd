import {ComponentFixture, TestBed, tick} from '@angular/core/testing';

import { TicketComponent } from './ticket.component';
import {TicketTypeDropdownComponent} from "./ticket-type-dropdown/ticket-type-dropdown.component";
import {FormBuilder} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpService} from "../../http.service";
import {MockHttpService} from "../../mockHttp.service";
import {TicketService} from "../ticket.service";
import {AbbreviationService} from "../../afkoteek/search/abbreviation-list/abbreviation.service";
import {AccountService} from "../../account.service";
import {NewAbbreviationComponent} from "./new-abbreviation/new-abbreviation.component";
import {TicketInfoRequestComponent} from "./ticket-info-request/ticket-info-request.component";
import {AppModule} from "../../app.module";
import {TicketModel} from "./ticket.model";
import {TicketTypeModel} from "./ticketType.model";
import {AbbreviationModel} from "../../afkoteek/search/abbreviation-list/abbreviation.model";

describe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;
  let mockHttp : MockHttpService;
  let ticketService : TicketService;
  beforeEach(() => {
    mockHttp = new MockHttpService();
    ticketService = new TicketService(mockHttp);
    TestBed.configureTestingModule({
      declarations: [
        TicketComponent, TicketTypeDropdownComponent, NewAbbreviationComponent, TicketInfoRequestComponent
      ],
      providers: [
        {provide: HttpService, useValue: mockHttp},
        {provide: TicketService, useValue: ticketService},
        {provide: AbbreviationService, useClass: AbbreviationService},
        {provide: AccountService, useClass: AccountService},
      ],
      imports: [
        AppModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("#deleteTicket should set removed to true when tickets are same", () => {
    let ticket = new TicketModel();
    ticket.removed = false;
    mockHttp.setData("/ticket", ticket);
    component.model = ticket;
    component.deleteTicket();
    expect(component.model.removed).toEqual(true);
  });
  it("#deleteTicket should not change removed when tickets are different", () => {
    let ticket = new TicketModel();
    let ticket2 = new TicketModel();
    ticket.removed = false;
    ticket.type = TicketTypeModel.ADD_ABBREVIATION;
    ticket2.type = TicketTypeModel.INFO;
    mockHttp.setData("/ticket", ticket);
    component.model = ticket2;
    component.deleteTicket();
    expect(component.model.removed).toEqual(false);
  });

  it("#init should set ticketHasBeenSelected to true if model id is not 0", () => {
    let ticket = new TicketModel();
    ticket.id = 1;
    // to handle side effects:
    ticket.temporaryAbbreviation = new AbbreviationModel();
    mockHttp.setData("/ticket", ticket);

    ticketService.setSelectedTicket(ticket);
    component.init();
    expect(component.ticketHasBeenSelected).toEqual(true);
  });
  it("#init should copy model into oldData", () => {
    let ticket = new TicketModel();
    ticket.id = 123;
    // to handle side effects:
    ticket.temporaryAbbreviation = new AbbreviationModel();
    mockHttp.setData("/ticket", ticket);

    ticketService.setSelectedTicket(ticket);
    component.init();
    expect(component.model.id).toEqual(component.getOldData().id);
  });
  it("#init should set model to newTicket when difference is detected", () => {
    let ticket1 = new TicketModel();
    ticket1.id = 123;
    let ticket2 = new TicketModel();
    ticket2.id = 456;
    mockHttp.setData("/ticket", ticket2);
    ticketService.setSelectedTicket(ticket1);
    component.init();
    expect(component.model.id).toEqual(ticket2.id);
  });
});
