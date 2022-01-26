import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import { AbbreviationService } from 'src/app/afkoteek/search/abbreviation-list/abbreviation.service';
import { OrganisationModel } from 'src/app/afkoteek/search/abbreviation-list/organisation.model';
import { gameService } from '../game.service';

@Component({
  selector: 'app-game-page-start',
  templateUrl: './game-page-start.component.html',
  styleUrls: ['./game-page-start.component.scss']
})
export class GamePageStartComponent implements OnInit {
  @ViewChild('gameform') gameForm!: NgForm;
  Glory= false;
  shouldDisableButton = true;

  constructor(private router: Router,private http: AbbreviationService, private route: ActivatedRoute, private gamservice: gameService) {
  }

  ngOnInit() {
    this.shouldDisableButton = true;
  }

  setName(event : any) {
    this.gamservice.playerName = event.target.value;
    this.shouldDisableButton = (this.gamservice.selectedOrganisatie === "");
  }
  onSelectOrg(data: OrganisationModel){
    this.gamservice.selectedOrganisatie = data.id;
    this.shouldDisableButton = (this.gamservice.playerName === "");
  }

  startGame(form: NgForm){
    this.shouldDisableButton = true;
    this.gamservice.forGlory = this.Glory;
    this.setAbbreviationData(this.gamservice.selectedOrganisatie);
  }

  forGlory(){
    this.Glory = !this.Glory;
  }

  setAbbreviationData(data: string){
    this.gamservice.getAbbreviations();
  }

}
