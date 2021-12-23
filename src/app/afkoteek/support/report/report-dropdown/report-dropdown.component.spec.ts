import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDropdownComponent } from './report-dropdown.component';

describe('ReportDropdownComponent', () => {
  let component: ReportDropdownComponent;
  let fixture: ComponentFixture<ReportDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
