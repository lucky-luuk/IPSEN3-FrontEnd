import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModComponent } from './add-mod.component';
import {NgbActiveModal, NgbModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmPopupComponent} from "../../afkoteek/support/confirm-popup/confirm-popup.component";
import {RouterTestingModule} from "@angular/router/testing";
import {FormBuilder, FormsModule} from "@angular/forms";
import {DropdownComponent} from "../../features/dropdown/dropdown.component";
import {AppModule} from "../../app.module";
import {OrganisationModel} from "../../afkoteek/search/abbreviation-list/organisation.model";

describe('AddModComponent', () => {
  let component: AddModComponent;
  let fixture: ComponentFixture<AddModComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [
        AddModComponent,
        DropdownComponent
      ],
      providers: [
        FormBuilder
      ],
      imports: [
        AppModule,
        RouterTestingModule.withRoutes([]),
        NgbModule,
        FormsModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AddModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("#onSetOrganisation sets organisation", () => {
    component.organisationModel = new OrganisationModel();
    let org = new OrganisationModel();
    org.name = "foo";
    component.onSetOrganisation(org);
    expect(component.organisationModel).toEqual(org);
  });

  it("#shouldEnablebutton returns false by default", () => {
    expect(component.shouldEnableButton()).toEqual(false);
  });
});
