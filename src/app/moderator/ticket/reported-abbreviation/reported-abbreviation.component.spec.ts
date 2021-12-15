import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedAbbreviationComponent } from './reported-abbreviation.component';

describe('ReportedAbbreviationComponent', () => {
  let component: ReportedAbbreviationComponent;
  let fixture: ComponentFixture<ReportedAbbreviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportedAbbreviationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedAbbreviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
