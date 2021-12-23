import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {HeaderService} from "./header.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('HeaderComponent', () => {
  let fixture : ComponentFixture<HeaderComponent>;
  let component : HeaderComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      providers: [
        {provide: HeaderService, useClass: HeaderService},
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("#setIsAuthorized should remove '/' from input", () => {
    component.isAuthorised = "";
    component.setIsAuthorized("/moderator");
    expect(component.isAuthorised).toEqual("moderator");
  });
});
