import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSavedPopupComponent } from './not-saved-popup.component';

describe('NotSavedPopupComponent', () => {
  let component: NotSavedPopupComponent;
  let fixture: ComponentFixture<NotSavedPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotSavedPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotSavedPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
