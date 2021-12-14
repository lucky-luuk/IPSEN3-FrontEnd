import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbreviationRequestComponent } from './abbreviation-request.component';

describe('AbbreviationRequestComponent', () => {
  let component: AbbreviationRequestComponent;
  let fixture: ComponentFixture<AbbreviationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbbreviationRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbreviationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
