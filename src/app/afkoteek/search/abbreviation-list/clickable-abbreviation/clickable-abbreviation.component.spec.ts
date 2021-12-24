import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableAbbreviationComponent } from './clickable-abbreviation.component';

describe('ClickableAbbreviationComponent', () => {
  let component: ClickableAbbreviationComponent;
  let fixture: ComponentFixture<ClickableAbbreviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickableAbbreviationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableAbbreviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
