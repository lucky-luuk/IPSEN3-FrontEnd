import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonParserLayoutRowComponent } from './json-parser-layout-row.component';

describe('JsonParserLayoutRowComponent', () => {
  let component: JsonParserLayoutRowComponent;
  let fixture: ComponentFixture<JsonParserLayoutRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonParserLayoutRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonParserLayoutRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
