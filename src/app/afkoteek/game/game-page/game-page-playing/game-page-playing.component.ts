import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbbreviationModel } from 'src/app/afkoteek/search/abbreviation-list/abbreviation.model';
import { gameService } from '../Game.service';

@Component({
  selector: 'app-game-page-playing',
  templateUrl: './game-page-playing.component.html',
  styleUrls: ['./game-page-playing.component.scss']
})
export class GamePagePlayingComponent implements OnInit, OnDestroy{
  AbbreviationsArray: AbbreviationModel[] = [];

  timer: number = 60;
  player: string = '';
  currentWord: string = '';
  ArrayOfWords: AbbreviationModel[] = [];
  forGlory: boolean = false;
  destroyPage = false;

  constructor(private gamservice: gameService, private router: Router) {
  }

  ngOnInit(){
    this.forGlory = this.gamservice.forGlory;
    this.player = this.gamservice.playerName;
    this.currentWord = this.gamservice.currentAbbreviation.name;
    this.ArrayOfWords = this.gamservice.listOfAnwsers;
    this.gamservice.setTimer();
    this.timerEvent();
   }

   timerEvent(){
    let intervalID = setInterval(() =>{
      this.timer = this.gamservice.counter;
      this.currentWord = this.gamservice.currentAbbreviation.name;
     this.ArrayOfWords = this.gamservice.listOfAnwsers;
     if(this.destroyPage || this.gamservice.gameOver){
       clearInterval(intervalID);
       this.router.navigate(['score']); 
     }
    }, 100);
  }

   nextQuestion(){
     this.gamservice.anwserGiven = false;
     this.gamservice.setQuestion();
   }

   ngOnDestroy(): void {
       this.gamservice.counter = 1;
       this.destroyPage = true;
   }

}
