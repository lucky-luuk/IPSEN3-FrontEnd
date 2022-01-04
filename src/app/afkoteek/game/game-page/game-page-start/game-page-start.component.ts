import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import { AbbreviationModel } from 'src/app/afkoteek/search/abbreviation-list/abbreviation.model';
import { AbbreviationService } from 'src/app/afkoteek/search/abbreviation-list/abbreviation.service';
import { OrganisationModel } from 'src/app/afkoteek/search/abbreviation-list/organisation.model';
import { gameService } from '../Game.service';

@Component({
  selector: 'app-game-page-start',
  templateUrl: './game-page-start.component.html',
  styleUrls: ['./game-page-start.component.scss']
})
export class GamePageStartComponent implements OnInit {
  @ViewChild('gameform') gameForm!: NgForm;
  organisatie: string = '';

  constructor(private router: Router,private http: AbbreviationService, private route: ActivatedRoute, private gamservice: gameService) {
  }

  ngOnInit() {
  }

  onSelectOrg(data: OrganisationModel){
    this.organisatie = data.id;
    
  }

  startGame(form: NgForm){
    this.setAbbreviationData(this.organisatie);

    this.gamservice.choosenOrganisatie(this.organisatie,this.gameForm.value.name);
  }

  setAbbreviationData(data: string){
    console.log("SetAbbreviationData");
    
    this.http.geAbbreviationByOrgId(this.organisatie, (data) => {
      data.forEach( (abbr) =>{
      console.log(abbr);
      this.gamservice.putAbbreviationInList(abbr);
      });
      this.gamservice.setQuestion();
      this.router.navigate(['spelen']);    
    });
  }

}
