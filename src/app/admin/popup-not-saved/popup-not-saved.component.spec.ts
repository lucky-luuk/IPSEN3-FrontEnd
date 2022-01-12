import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNotSavedComponent } from './popup-not-saved.component';

describe('PopupNotSavedComponent', () => {
  let component: PopupNotSavedComponent;
  let fixture: ComponentFixture<PopupNotSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupNotSavedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNotSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
