import { Component, OnInit } from '@angular/core';
import { gameService } from './game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
