import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "src/app/http.service";
import { AbbreviationModel } from "../../search/abbreviation-list/abbreviation.model";
import { AbbreviationService } from "../../search/abbreviation-list/abbreviation.service";
import { Game } from "./game.model";


@Injectable({
    providedIn: 'root'
  })

export class gameService{
    private endpoint : string = "/score";

    holderOfAbbreviations: AbbreviationModel[] =[];
    listOfAbbreviations: AbbreviationModel[] = [];
    listOfAnwsers: AbbreviationModel[] =[];
    listOfUsedAfk: string[] = [];
    Game : Game = new Game();
    Gamemodel : Game[] = [];

    currentAbbreviation: AbbreviationModel = new AbbreviationModel;
    wrongAbbreviation: AbbreviationModel = new AbbreviationModel;

    randomNumber: number = 0;
    randomAnwserLocation: number = 0;
    goOn: boolean = true;

    selectedOrganisatie: string = '';
    checkedAbbreviation: string = '';
    playerName: string = '';
    score: number = 0;

    counter: number = 3;
    gameOver: boolean = false;
    anwserGiven = false;
    forGlory = false;
    anwserSend = false;
    scoreSavedInDB = false;

    totalAbbreviations: number = 0;
    maxAnwsers: number= 4;
    organisatie = '';

    constructor(private router: Router, private AbbreviationHTTP: AbbreviationService, private http : HttpService){
    }

    putAbbreviationInList(data: AbbreviationModel){
        this.listOfAbbreviations.push(data);
        this.holderOfAbbreviations.push(data);
       this.totalAbbreviations = this.listOfAbbreviations.length - 1;
    }


// SET THE QUESTIONS AND ANWSERS FOR THE GAME
    setQuestion() {
        this.totalAbbreviations = this.listOfAbbreviations.length - 1;
        this.randomNumber = Math.floor(Math.random() * this.totalAbbreviations);
        this.currentAbbreviation = this.listOfAbbreviations[this.randomNumber]

        this.listOfAbbreviations.splice(this.listOfAbbreviations.findIndex(abbr => abbr.name === this.currentAbbreviation.name), 1)
        this.listOfUsedAfk.push(this.currentAbbreviation.name);

        if(this.listOfAbbreviations.length < 5){
            this.listOfUsedAfk = [];
            this.listOfAbbreviations = this.holderOfAbbreviations;
        }
       this.setListOfAnswers();
    }

    setListOfAnswers(){
        this.listOfAnwsers = [];
        this.randomAnwserLocation = Math.floor(Math.random() *3);
        for(let i =0;i< this.maxAnwsers; i++){
            if(this.randomAnwserLocation != i){
                this.getWrongAnwser();
            }else{
                this.listOfAnwsers.push(this.currentAbbreviation);
            }
        }
    }

    getWrongAnwser(){
        this.goOn = true;

        while(this.goOn){
            this.randomNumber = Math.floor(Math.random() * this.holderOfAbbreviations.length -1);
            this.wrongAbbreviation = this.holderOfAbbreviations[this.randomNumber];

            if(this.wrongAbbreviation !== undefined){
                if(this.wrongAbbreviation.name !== this.currentAbbreviation.name){
                    this.listOfAnwsers.push(this.wrongAbbreviation);
                    this.goOn = false;
                }

            }
        }
    }

    controlAnwser(anwser: String){
        this.anwserGiven = true;
        if(anwser === this.currentAbbreviation.description){
            this.score = this.score + this.counter;
        }else{
            this.score = this.score - Math.round(this.counter/2);
            if(this.score < 0){
                this.score = 0;
            }
        }
        if(this.forGlory){
            this.anwserGiven = false;
            this.setQuestion();
        }
    }

    prepForNextgame(){
        this.listOfUsedAfk = [];
        this.score = 0;
        this.counter = 3;
        this.goOn = true;
        this.gameOver = false;
        this.anwserGiven = false;
        this.forGlory = false;
        this.anwserSend = false;
    }

    postScore(){
        this.anwserSend = true;
        this.Game.name = this.playerName;
        this.Game.score = this.score;
        this.Game.organisation_id = this.selectedOrganisatie;
        this.Gamemodel = [];

        this.Gamemodel.push(this.Game);
        this.http.post<Game[]>('/score', this.Gamemodel, (data) => {
            this.scoreSavedInDB = true;
        });
    }

    getAbbreviations(){
        this.holderOfAbbreviations =[];
        this.listOfAbbreviations = [];
        if(this.forGlory){
            this.AbbreviationHTTP.geAbbreviationByOrgId("Rijksbreed", (data) => {
                data.forEach( (abbr) =>{
                    this.putAbbreviationInList(abbr);
                });
                this.setQuestion();
                this.router.navigate(['spelen']);

            }, () => {});

        }else{
            this.AbbreviationHTTP.geAbbreviationByOrgId(this.organisatie, (data) => {
                data.forEach( (abbr) =>{
                    this.putAbbreviationInList(abbr);
                });
                this.setQuestion();
                this.router.navigate(['spelen']);

            }, () => {});

        }
    }

    getTopPlayers(implementation : (data : Game[]) => void){
        this.http.get<Game[]>("/score", new Map<string, string>(),implementation);
    }

    setTimer(){
        this.gameOver = false;
        let intervalID = setInterval(() =>{
            this.counter = this.counter - 1;
            if(this.counter === 0){
                clearInterval(intervalID);
                this.gameOver = true;
            }
        }, 1000);
    }
}
