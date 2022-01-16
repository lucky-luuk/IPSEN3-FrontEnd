import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleTicketPopupComponent } from './handle-ticket-popup.component';

describe('HandleTicketPopupComponent', () => {
  let component: HandleTicketPopupComponent;
  let fixture: ComponentFixture<HandleTicketPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleTicketPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleTicketPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
