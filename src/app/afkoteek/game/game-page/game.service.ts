import { Injectable } from "@angular/core";
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

    counter: number = 10;
    gameOver: boolean = false;
    anwserGiven = false;
    forGlory = false;
    anwserSend = false;

    totalAbbreviations: number = 0;
    maxAnwsers: number= 4;
    organisatie = '';

    constructor(private AbbreviationHTTP: AbbreviationService, private http : HttpService){
    }

    choosenOrganisatie(org: string, player: string){
        this.selectedOrganisatie = org;
        this.playerName = player;
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
               
        if(this.listOfAbbreviations.length == 0){
            this.listOfUsedAfk = [];
            this.listOfAbbreviations = this.holderOfAbbreviations;
        }
        console.log("Correct: " + this.currentAbbreviation.description);
        
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
            if(this.wrongAbbreviation.name !== this.currentAbbreviation.name){
                this.listOfAnwsers.push(this.wrongAbbreviation);
                this.goOn = false;
            }
        }
    }

    controlAnwser(anwser: String){
        this.anwserGiven = true;
        if(anwser === this.currentAbbreviation.description){
            this.score = this.score + this.counter;
        }
        if(this.forGlory){
            this.anwserGiven = false;
            this.setQuestion();
        }
        
    }

    prepForNextgame(){
        this.holderOfAbbreviations =[];
        this.listOfAbbreviations = [];
        this.listOfAnwsers =[];
        this.listOfUsedAfk = [];

        this.randomNumber = 0;
        this.randomAnwserLocation = 0;
        this.goOn = true;

        this.selectedOrganisatie = '';
        this.checkedAbbreviation = '';
        this.playerName = '';
        this.score = 0;

        this.counter = 60;
        this.gameOver = false;
        this.anwserGiven = false;
        this.forGlory = false;
        this.anwserSend = false;

        this.totalAbbreviations = 0;
    }

    postScore(){
        this.anwserSend = true;

        this.Game.name = this.playerName;
        this.Game.totalScore = this.score;

        this.Gamemodel = [];
        this.Gamemodel.push(this.Game);

        this.http.put<Game[]>('/score', this.Gamemodel, (data) => {
        });
    }

    getAbbreviations(){
        if(this.forGlory){
            //TODO: GET 100 RANDOM WORDS!
        }else{
            this.AbbreviationHTTP.geAbbreviationByOrgId(this.organisatie, (data) => {
                data.forEach( (abbr) =>{
                    this.putAbbreviationInList(abbr);
                }); 
            });
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