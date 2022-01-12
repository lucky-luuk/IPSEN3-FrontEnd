import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePageStartComponent } from './game-page-start.component';
import {gameService} from "../Game.service";

describe('GamePageStartComponent', () => {
  let component: GamePageStartComponent;
  let fixture: ComponentFixture<GamePageStartComponent>;

  beforeEach(async () => {
    component = new GamePageStartComponent(new gameService());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
