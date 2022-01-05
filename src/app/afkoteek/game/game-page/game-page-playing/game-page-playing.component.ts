import { Component, OnInit } from '@angular/core';
import { AbbreviationModel } from 'src/app/afkoteek/search/abbreviation-list/abbreviation.model';
import { gameService } from '../Game.service';

@Component({
  selector: 'app-game-page-playing',
  templateUrl: './game-page-playing.component.html',
  styleUrls: ['./game-page-playing.component.scss']
})
export class GamePagePlayingComponent implements OnInit{
  AbbreviationsArray: AbbreviationModel[] = [];

  player: string = '';
  currentWord: string = '';
  ArrayOfWords: AbbreviationModel[] = [];

  constructor(private gamservice: gameService) {
  }

  ngOnInit(){
    this.player = this.gamservice.playerName;
    this.currentWord = this.gamservice.currentAbbreviation.name;
    this.ArrayOfWords = this.gamservice.listOfAnwsers;
   }

   nextQuestion(){
     this.gamservice.setQuestion();
     this.currentWord = this.gamservice.currentAbbreviation.name;
     this.ArrayOfWords = this.gamservice.listOfAnwsers;
   }

}
