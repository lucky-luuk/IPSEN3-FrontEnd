import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePagePlayingComponent } from './game-page-playing.component';
import {AppModule} from "../../../../app.module";
import {gameService} from "../game.service";

describe('GamePagePlayingComponent', () => {
  let component: GamePagePlayingComponent;
  let fixture: ComponentFixture<GamePagePlayingComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ GamePagePlayingComponent ],
      providers: [
        gameService
      ],
       imports: [AppModule],
     })
    .compileComponents();
    fixture = TestBed.createComponent(GamePagePlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
