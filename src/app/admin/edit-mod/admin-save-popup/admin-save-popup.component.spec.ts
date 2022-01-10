import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSavePopupComponent } from './admin-save-popup.component';

describe('PopupComponent', () => {
  let component: AdminSavePopupComponent;
  let fixture: ComponentFixture<AdminSavePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSavePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSavePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
