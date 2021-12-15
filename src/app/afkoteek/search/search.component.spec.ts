import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {AbbreviationListComponent} from "./abbreviation-list/abbreviation-list.component";
import {AbbreviationService} from "./abbreviation-list/abbreviation.service";
import {MockHttpService} from "../../mockHttp.service";

describe('SearchComponent', () => {
  let component: SearchComponent;


  beforeEach(() => {
    let abbrListComp = new AbbreviationListComponent(new AbbreviationService(new MockHttpService()));
    component = new SearchComponent();
    component.abbreviationList = abbrListComp;
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
