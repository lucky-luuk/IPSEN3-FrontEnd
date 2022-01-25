import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { AdminHeaderComponent } from './admin-header.component';
import {HeaderService} from "./header.service";
import {RouterTestingModule} from "@angular/router/testing";
import {AppModule} from "../../app.module";

describe('HeaderComponent', () => {
  let fixture : ComponentFixture<AdminHeaderComponent>;
  let component : AdminHeaderComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminHeaderComponent
      ],
      providers: [
        {provide: HeaderService, useClass: HeaderService},
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        AppModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AdminHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("#setIsAuthorized should remove '/' from input", () => {
    component.isAuthorised = "";
    component.setIsAuthorized("/moderator");
    expect(component.isAuthorised).toEqual("moderator");
  });
});
