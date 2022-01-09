import { Component, OnInit } from '@angular/core';
import { gameService } from '../Game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  score: number = 0;

  constructor(private gameService: gameService) { }

  ngOnInit(): void {
    this.score = this.gameService.score;
  }

}
