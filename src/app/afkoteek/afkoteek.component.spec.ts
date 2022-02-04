import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfkoteekComponent } from './afkoteek.component';
import {SearchComponent} from "./search/search.component";
import {AppModule} from "../app.module";

describe('AfkoteekComponent', () => {
  let component: AfkoteekComponent;
  let fixture: ComponentFixture<AfkoteekComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ AfkoteekComponent, SearchComponent ],
       imports: [AppModule],
     })
    .compileComponents();
    fixture = TestBed.createComponent(AfkoteekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
