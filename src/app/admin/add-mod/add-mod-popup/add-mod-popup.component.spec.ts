import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModPopupComponent } from './add-mod-popup.component';

describe('AddModPopupComponent', () => {
  let component: AddModPopupComponent;
  let fixture: ComponentFixture<AddModPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
