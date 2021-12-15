import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTypeDropdownComponent } from './ticket-type-dropdown.component';

describe('TicketTypeDropdownComponent', () => {
  let component: TicketTypeDropdownComponent;
  let fixture: ComponentFixture<TicketTypeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketTypeDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketTypeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
