import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlayerListComponent } from './top-player-list.component';

describe('TopPlayerListComponent', () => {
  let component: TopPlayerListComponent;
  let fixture: ComponentFixture<TopPlayerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPlayerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
