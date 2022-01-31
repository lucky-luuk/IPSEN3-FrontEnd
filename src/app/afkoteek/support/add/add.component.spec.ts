import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import {MockHttpService} from "../../../http/mockHttp.service";
import {HttpService} from "../../../http/http.service";
import {AccountService} from "../../../account/account.service";
import {TicketService} from "../../../moderator/ticket.service";
import {NgbModal, NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterTestingModule} from "@angular/router/testing";
import {FormBuilder, FormsModule} from "@angular/forms";
import {TicketModel} from "../../../moderator/ticket/ticket.model";
import {AbbreviationModel} from "../../search/abbreviation-list/abbreviation.model";
import {OrganisationModel} from "../../search/abbreviation-list/organisation.model";
import {SearchBarComponent} from "../../search/search-bar/search-bar.component";
import {DropdownComponent} from "../../../features/dropdown/dropdown.component";
import {AbbreviationListComponent} from "../../search/abbreviation-list/abbreviation-list.component";
import {AppModule} from "../../../app.module";

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let mockHttp : MockHttpService;
  beforeEach( () => {
    mockHttp = new MockHttpService();
    TestBed.configureTestingModule({
      declarations: [ AddComponent, SearchBarComponent, DropdownComponent, AbbreviationListComponent ],
      providers: [
        {provide: HttpService, useValue: mockHttp},
        AccountService,
        TicketService,
        FormBuilder
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        NgbModule,
        FormsModule,
        AppModule
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("#createTicket should correctly create a ticket and send it to service", () => {
    mockHttp.setData("/ticket", []);
    mockHttp.get<TicketModel[]>("/ticket", new Map<string, string>(), (data) => {
      expect(data.length).toEqual(0);
    });
    let model : AbbreviationModel = new AbbreviationModel();
    model.name = "this is a test";
    component.model = model;
    component.createTicket();
    mockHttp.get<TicketModel[]>("/ticket", new Map(), (data) => {
      expect(data.length).toEqual(1);
      let abbr = data[0].temporaryAbbreviation;
      expect(abbr).toBeTruthy();
      expect(abbr?.name).toEqual(model.name);
    });
  });

  it('#onSelectOrganisation should add an organisation to model', function () {
    expect(component.model.organisations.length).toEqual(0);
    component.onSelectOrganisation(new OrganisationModel());
    expect(component.model.organisations.length).toEqual(1);
  });

  it("#onSetDescription should correctly set model description", () => {
    let description = "foo";
    component.onSetDescription({target: {value: description}});
    expect(component.model.description).toEqual(description);
  });

  it("#shouldEnableButton should return true if model is not default", () => {
    let model = new AbbreviationModel();
    model.name = "foo";
    model.description = "bar";
    model.organisations.push(new OrganisationModel());
    component.model = model;
    expect(component.shouldEnableButton()).toBeTruthy();
  });

});
