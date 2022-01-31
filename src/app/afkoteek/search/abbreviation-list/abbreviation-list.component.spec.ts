import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbreviationListComponent } from './abbreviation-list.component';
import {MockHttpService} from "../../../http/mockHttp.service";
import {AbbreviationService} from "./abbreviation.service";
import {DropdownComponent} from "../../../features/dropdown/dropdown.component";
import {AbbreviationModel} from "./abbreviation.model";
import {OrganisationModel} from "./organisation.model";

describe('AbbreviationListComponent', () => {
  let component: AbbreviationListComponent;

  beforeEach(() => {
    component = new AbbreviationListComponent(new AbbreviationService(new MockHttpService()));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("#setAbbreviationData should set abbreviations#length to 0 when given null", () => {
    expect(component.abbreviations.length).toBe(0);
    component.setAbbreviationData(null);
    expect(component.abbreviations.length).toBe(0);
  });

  it("#setOrganisationFilter should correctly set organisationFilter and have correct default value", () => {
    expect(component.organisationIdFilter).toEqual(OrganisationModel.DEFAULT_ID);
    let id : string = "1234567890";
    component.setOrganisationIdFilter(id);
    expect(component.organisationIdFilter).toEqual(id);
  });

  it("#onSearch should set correct data, when name == \"\", should search by org_id", () => {
    // set the correct data
    let mockService = new MockHttpService();
    let data = [new AbbreviationModel()];
    let org = new OrganisationModel();
    let id = "1";
    org.id = id;
    data[0].organisations.push(org);
    mockService.setData("/abbreviation", data);
    component = new AbbreviationListComponent(new AbbreviationService(mockService));
    component.organisationIdFilter = id;

    // search for the data;
    expect(component.abbreviations.length).toBe(0);
    component.onSearch("");
    expect(component.abbreviations[0].organisations[0].id).toBe(id);
  });

  it("#onSearch should set correct data, when name != \"\", should search by name", () => {
    // set the correct data
    let mockService = new MockHttpService();
    let data = [new AbbreviationModel()];
    let name = "an abbreviation name";
    data[0].name = name;
    mockService.setData("/abbreviation", data);
    component = new AbbreviationListComponent(new AbbreviationService(mockService));

    // search for the data;
    expect(component.abbreviations.length).toBe(0);
    component.onSearch(name);
    expect(component.abbreviations[0].name).toBe(name);
  });
});
