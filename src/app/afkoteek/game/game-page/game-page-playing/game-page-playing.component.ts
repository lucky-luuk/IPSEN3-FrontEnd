import { Component, OnInit } from '@angular/core';

import { Game } from '../game.model';

@Component({
  selector: 'app-game-page-playing',
  templateUrl: './game-page-playing.component.html',
  styleUrls: ['./game-page-playing.component.scss']
})
export class GamePagePlayingComponent implements OnInit {
 public GameLogic: Game = new Game('Roeland',0);

  constructor() { }

  ngOnInit(): void {
  }

}
