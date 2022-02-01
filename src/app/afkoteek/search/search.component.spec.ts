import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {AbbreviationListComponent} from "./abbreviation-list/abbreviation-list.component";
import {AbbreviationService} from "./abbreviation-list/abbreviation.service";
import {MockHttpService} from "../../http/mockHttp.service";
import {HttpService} from "../../http/http.service";
import {RouterTestingModule} from "@angular/router/testing";
import {AppModule} from "../../app.module";

describe('SearchComponent', () => {
  let component: SearchComponent;
  let abbrListComponent: AbbreviationListComponent;
  let fixture: ComponentFixture<AbbreviationListComponent>;

  let mockHttp : MockHttpService;

  beforeEach(() => {
    mockHttp = new MockHttpService();
    TestBed.configureTestingModule({
      declarations: [ AbbreviationListComponent ],
      providers: [
        {provide: HttpService, useValue: mockHttp},
        AbbreviationService
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        AppModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AbbreviationListComponent);
    abbrListComponent = fixture.componentInstance;
    fixture.detectChanges();

    component = new SearchComponent();
    component.abbreviationList = abbrListComponent;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("#onSearch should correctly set lastSearchData", () => {
    expect(component.lastSearchedData).toEqual("");
    let id = "1234256";
    component.onSearch(id);
    expect(component.lastSearchedData).toEqual(id);
  });
});
