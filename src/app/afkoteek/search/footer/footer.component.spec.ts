import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import {AppModule} from "../../../app.module";

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
       imports: [AppModule],
     })
    .compileComponents();
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
