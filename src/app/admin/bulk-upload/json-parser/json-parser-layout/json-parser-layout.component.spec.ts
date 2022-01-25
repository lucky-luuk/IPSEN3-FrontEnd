import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonParserLayoutComponent } from './json-parser-layout.component';
import {AppModule} from "../../../../app.module";
import {RouterTestingModule} from "@angular/router/testing";

describe('JsonParserLayoutComponent', () => {
  let component: JsonParserLayoutComponent;
  let fixture: ComponentFixture<JsonParserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonParserLayoutComponent ],
      imports: [
        AppModule,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonParserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
