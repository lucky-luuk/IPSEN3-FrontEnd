import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketHasBeenEditedPopupComponent } from './ticket-has-been-edited-popup.component';

describe('TicketHasBeenEditedPopupComponent', () => {
  let component: TicketHasBeenEditedPopupComponent;
  let fixture: ComponentFixture<TicketHasBeenEditedPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketHasBeenEditedPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketHasBeenEditedPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
