import { Component, OnInit } from '@angular/core';
import { AbbreviationModel } from 'src/app/afkoteek/search/abbreviation-list/abbreviation.model';
import { AbbreviationService } from 'src/app/afkoteek/search/abbreviation-list/abbreviation.service';
import { HttpService } from 'src/app/http.service';
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

  constructor(private gamservice: gameService, private http: AbbreviationService) {
  }

  ngOnInit(){
    this.player = this.gamservice.playerName;
    this.currentWord = this.gamservice.currentAbbreviation.name;
   }

   nextQuestion(){
     this.gamservice.setQuestion();
     this.currentWord = this.gamservice.currentAbbreviation.name;
     this.ArrayOfWords = this.gamservice.listOfAnwsers;
   }

}
