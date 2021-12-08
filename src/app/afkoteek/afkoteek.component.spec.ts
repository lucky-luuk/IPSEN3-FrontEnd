import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfkoteekComponent } from './afkoteek.component';

describe('AfkoteekComponent', () => {
  let component: AfkoteekComponent;
  let fixture: ComponentFixture<AfkoteekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfkoteekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfkoteekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
