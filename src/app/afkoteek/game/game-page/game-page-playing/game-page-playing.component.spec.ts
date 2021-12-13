import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePagePlayingComponent } from './game-page-playing.component';

describe('GamePagePlayingComponent', () => {
  let component: GamePagePlayingComponent;
  let fixture: ComponentFixture<GamePagePlayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePagePlayingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePagePlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
