import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableAbbreviationComponent } from './clickable-abbreviation.component';
import {AppModule} from "../../../../app.module";

describe('ClickableAbbreviationComponent', () => {
  let component: ClickableAbbreviationComponent;
  let fixture: ComponentFixture<ClickableAbbreviationComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ ClickableAbbreviationComponent ],
       imports: [AppModule],
     })
    .compileComponents();
    fixture = TestBed.createComponent(ClickableAbbreviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
