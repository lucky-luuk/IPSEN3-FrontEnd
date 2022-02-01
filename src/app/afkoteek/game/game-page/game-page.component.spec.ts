import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePageComponent } from './game-page.component';
import {GamePageStartComponent} from "./game-page-start/game-page-start.component";
import {gameService} from "./game.service";
import {AppModule} from "../../../app.module";

describe('GamePageComponent', () => {
  let component: GamePageComponent;
  let fixture: ComponentFixture<GamePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePageComponent, GamePageStartComponent ],
      providers: [
        gameService
      ],
      imports: [AppModule],
    })
    .compileComponents();
    fixture = TestBed.createComponent(GamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
