import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdminComponent } from './search-admin.component';
import {AppModule} from "../../app.module";

describe('SearchAdminComponent', () => {
  let component: SearchAdminComponent;
  let fixture: ComponentFixture<SearchAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAdminComponent ],
      imports: [AppModule],
    })
    .compileComponents();
    fixture = TestBed.createComponent(SearchAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
