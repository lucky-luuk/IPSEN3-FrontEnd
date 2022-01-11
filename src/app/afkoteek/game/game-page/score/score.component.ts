import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { gameService } from '../Game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  score: number = 0;
  name: string = '';

  constructor(private gameService: gameService, private router: Router) { }

  ngOnInit(): void {
    this.score = this.gameService.score;
    this.name = this.gameService.playerName;
  }

  sendScoreToDB(){
    if(!this.gameService.anwserSend){
      this.gameService.postScore();
    }
  }

  backToStart(){
    this.gameService.prepForNextgame();
    this.router.navigate(['/home']);
  }

}
