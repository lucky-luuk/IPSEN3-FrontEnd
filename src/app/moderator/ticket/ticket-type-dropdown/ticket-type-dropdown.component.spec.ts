import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTypeDropdownComponent } from './ticket-type-dropdown.component';
import {HeaderComponent} from "../../../afkoteek/header/header.component";
import {HeaderService} from "../../../afkoteek/header/header.service";
import {RouterTestingModule} from "@angular/router/testing";
import {FormBuilder} from "@angular/forms";
import {AppModule} from "../../../app.module";

describe('TicketTypeDropdownComponent', () => {
  let component: TicketTypeDropdownComponent;
  let fixture: ComponentFixture<TicketTypeDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TicketTypeDropdownComponent
      ],
      imports: [AppModule]
    }).compileComponents();
    fixture = TestBed.createComponent(TicketTypeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
