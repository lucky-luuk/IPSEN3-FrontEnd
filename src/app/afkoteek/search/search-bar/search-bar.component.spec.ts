import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("#onKey should call onSearchEvent within timeframe", () => {
    jasmine.clock().install();
    let changed = false;
    component.onSearchEvent.subscribe(  (data) => {
      changed = true;
    });
    component.onKeyTimeout = 1;
    component.onKey({target: {value: ""}});
    jasmine.clock().tick(component.onKeyTimeout);

    jasmine.clock().uninstall();
    expect(changed).toEqual(true);
  });

  it("has input type \"text\"", () => {
    const element = fixture.nativeElement.querySelector("input");
    expect(element.type).toEqual("text");
  });

  it("correctly sets placeholder text", () => {
    const element = fixture.nativeElement.querySelector("input");
    expect(element.placeholder).toEqual(component.placeHolderText);
  });
});
