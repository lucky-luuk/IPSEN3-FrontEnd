import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModTicketSavePopupComponent } from './mod-ticket-save-popup.component';

describe('ModTicketSavePopupComponent', () => {
  let component: ModTicketSavePopupComponent;
  let fixture: ComponentFixture<ModTicketSavePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModTicketSavePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModTicketSavePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
