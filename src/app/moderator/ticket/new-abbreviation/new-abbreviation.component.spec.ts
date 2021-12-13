import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAbbreviationComponent } from './new-abbreviation.component';

describe('NewAbbreviationComponent', () => {
  let component: NewAbbreviationComponent;
  let fixture: ComponentFixture<NewAbbreviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAbbreviationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAbbreviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
