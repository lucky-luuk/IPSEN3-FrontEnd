import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketModeratorDropdownComponent } from './ticket-moderator-dropdown.component';

describe('TicketModeratorDropdownComponent', () => {
  let component: TicketModeratorDropdownComponent;
  let fixture: ComponentFixture<TicketModeratorDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketModeratorDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketModeratorDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
