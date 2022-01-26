import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLoginPopupComponent } from './first-login-popup.component';

describe('FirstLoginPopupComponent', () => {
  let component: FirstLoginPopupComponent;
  let fixture: ComponentFixture<FirstLoginPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLoginPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLoginPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
