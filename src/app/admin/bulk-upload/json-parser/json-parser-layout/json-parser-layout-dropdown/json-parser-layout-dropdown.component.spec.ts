import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonParserLayoutDropdownComponent } from './json-parser-layout-dropdown.component';

describe('JsonParserLayoutDropdownComponent', () => {
  let component: JsonParserLayoutDropdownComponent;
  let fixture: ComponentFixture<JsonParserLayoutDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonParserLayoutDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonParserLayoutDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
