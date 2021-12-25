import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchModeratorComponent } from './search-moderator.component';
import {AppModule} from "../../../app.module";

describe('SearchModeratorComponent', () => {
  let component: SearchModeratorComponent;
  let fixture: ComponentFixture<SearchModeratorComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ SearchModeratorComponent ],
      imports: [AppModule],
    })
    .compileComponents();
    fixture = TestBed.createComponent(SearchModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
