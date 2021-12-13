import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePageStartComponent } from './game-page-start.component';

describe('GamePageStartComponent', () => {
  let component: GamePageStartComponent;
  let fixture: ComponentFixture<GamePageStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePageStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePageStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
