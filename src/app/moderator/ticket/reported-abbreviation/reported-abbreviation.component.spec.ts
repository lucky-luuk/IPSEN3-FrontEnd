import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedAbbreviationComponent } from './reported-abbreviation.component';
import {AppModule} from "../../../app.module";

describe('ReportedAbbreviationComponent', () => {
  let component: ReportedAbbreviationComponent;
  let fixture: ComponentFixture<ReportedAbbreviationComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ ReportedAbbreviationComponent ],
       imports: [AppModule],
     })
    .compileComponents();
    fixture = TestBed.createComponent(ReportedAbbreviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
