import { Component, OnInit } from '@angular/core';
import { Game } from '../../game.model';
import { gameService } from '../../Game.service';

@Component({
  selector: 'app-top-player-list',
  templateUrl: './top-player-list.component.html',
  styleUrls: ['./top-player-list.component.scss']
})
export class TopPlayerListComponent implements OnInit {
  game : Game[] = [];

  constructor(private gameService: gameService) { }

  ngOnInit(): void {
   this.gameService.getTopPlayers((data) => {
     this.game = data;
  }); 
  }

}
