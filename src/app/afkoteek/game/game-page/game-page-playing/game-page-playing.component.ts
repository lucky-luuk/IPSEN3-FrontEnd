import { Component, OnInit } from '@angular/core';

import { Game } from '../game.model';
import { gameService } from '../game.service';

@Component({
  selector: 'app-game-page-playing',
  templateUrl: './game-page-playing.component.html',
  styleUrls: ['./game-page-playing.component.scss']
})
export class GamePagePlayingComponent implements OnInit {

 public GameLogic: Game = new Game(this.gameService.name,0);

  constructor(private gameService: gameService) { }

  ngOnInit(): void { }

}
