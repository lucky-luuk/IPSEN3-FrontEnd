import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchModeratorComponent } from './search-moderator.component';

describe('SearchModeratorComponent', () => {
  let component: SearchModeratorComponent;
  let fixture: ComponentFixture<SearchModeratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchModeratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
