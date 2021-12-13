import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbreviationListComponent } from './abbreviation-list.component';
import {MockHttpService} from "../../../mockHttp.service";
import {AbbreviationService} from "./abbreviation.service";

describe('AbbreviationListComponent', () => {
  let component: AbbreviationListComponent;

  beforeEach(() => {
    component = new AbbreviationListComponent(new AbbreviationService(new MockHttpService()));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
