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
  organisatie: string = '';
  Glory= false;

  constructor(private router: Router,private http: AbbreviationService, private route: ActivatedRoute, private gamservice: gameService) {
  }

  ngOnInit() {
  }

  onSelectOrg(data: OrganisationModel){
    this.organisatie = data.id;
  }

  startGame(form: NgForm){
    this.gamservice.forGlory = this.Glory;
    this.setAbbreviationData(this.organisatie);
    this.gamservice.selectedOrganisatie = this.organisatie;
    this.gamservice.playerName = form.value.name;
  }

  forGlory(){
    this.Glory = !this.Glory; 
  }

  setAbbreviationData(data: string){
    this.gamservice.organisatie = this.organisatie;
    this.gamservice.getAbbreviations();
  }

}
