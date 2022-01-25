import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonParserLayoutComponent } from './json-parser-layout.component';

describe('JsonParserLayoutComponent', () => {
  let component: JsonParserLayoutComponent;
  let fixture: ComponentFixture<JsonParserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonParserLayoutComponent ]
    })
    .compileComponents();
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
