import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import {MockHttpService} from "../../mockHttp.service";
import {OrganisationService} from "./organisation.service";
import {FormBuilder} from "@angular/forms";

describe('DropdownComponent', () => {
  let component: DropdownComponent;

  beforeEach(() => {
    component = new DropdownComponent(new FormBuilder(), new OrganisationService(new MockHttpService()))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
