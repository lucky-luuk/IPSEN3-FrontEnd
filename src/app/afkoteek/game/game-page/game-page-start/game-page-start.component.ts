import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { gameService } from '../game.service';

@Component({
  selector: 'app-game-page-start',
  templateUrl: './game-page-start.component.html',
  styleUrls: ['./game-page-start.component.scss']
})
export class GamePageStartComponent implements OnInit {

  @ViewChild ('nameInput') nameInputRef: ElementRef;

  constructor(private gameService: gameService) {
    this.nameInputRef = new ElementRef(null);
  }

  ngOnInit(): void {
  }

  startGame(){
    const playerName = this.nameInputRef.nativeElement.value;
    this.gameService.addPlayer(playerName);
  }

}
