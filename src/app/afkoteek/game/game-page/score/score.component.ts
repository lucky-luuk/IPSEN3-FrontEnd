import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { gameService } from '../game.service';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Score has been send!</h4>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})

export class NgbdModalContent{
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  forGlory= false;
  score: number = 0;
  name: string = '';

  constructor(private gameService: gameService, private router: Router, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.forGlory = this.gameService.forGlory;
    this.score = this.gameService.score;
    this.name = this.gameService.playerName;
    this.forGlory= true;
  }

  sendScoreToDB(){
    if(!this.gameService.anwserSend){      
      this.gameService.postScore();
      let intervalID = setTimeout(() =>{
        const modelref = this.modalService.open(NgbdModalContent);
        this.forGlory = false;
      },2000);
    }
  }

  backToStart(){
    this.gameService.prepForNextgame();
    this.router.navigate(['/home']);
  }

}
