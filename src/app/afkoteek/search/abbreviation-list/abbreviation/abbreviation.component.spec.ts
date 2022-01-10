import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbreviationComponent } from './abbreviation.component';
import {AppModule} from "../../../../app.module";

describe('AbbreviationComponent', () => {
  let component: AbbreviationComponent;
  let fixture: ComponentFixture<AbbreviationComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ AbbreviationComponent ],
       imports: [AppModule],
     })
    .compileComponents();
    fixture = TestBed.createComponent(AbbreviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
