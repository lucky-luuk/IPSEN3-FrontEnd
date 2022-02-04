import { Component, Input, OnInit } from '@angular/core';
import { gameService } from '../../game.service';

@Component({
  selector: 'app-anwser',
  templateUrl: './anwser.component.html',
  styleUrls: ['./anwser.component.scss']
})
export class AnwserComponent implements OnInit {
  @Input() anwser!: { description: string};

  constructor(private gameService: gameService) { }

  ngOnInit(): void {}

  selectAnwser(givenAnwser: string){
    if(!this.gameService.anwserGiven){
      this.gameService.controlAnwser(givenAnwser);
    }
  }
}
