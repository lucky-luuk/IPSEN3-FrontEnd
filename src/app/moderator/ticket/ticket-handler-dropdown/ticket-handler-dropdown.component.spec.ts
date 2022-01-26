import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketHandlerDropdownComponent } from './ticket-handler-dropdown.component';

describe('TicketHandlerDropdownComponent', () => {
  let component: TicketHandlerDropdownComponent;
  let fixture: ComponentFixture<TicketHandlerDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketHandlerDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketHandlerDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
