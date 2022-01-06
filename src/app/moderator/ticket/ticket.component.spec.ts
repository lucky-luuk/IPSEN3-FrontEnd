import { ComponentFixture, TestBed } from '@angular/core/testing';

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

describe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;

  beforeEach(() => {
    let mockhttp = new MockHttpService();
    TestBed.configureTestingModule({
      declarations: [
        TicketComponent, TicketTypeDropdownComponent, NewAbbreviationComponent, TicketInfoRequestComponent
      ],
      providers: [
        {provide: HttpService, useValue: mockhttp},
        {provide: TicketService, useClass: TicketService},
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
});
