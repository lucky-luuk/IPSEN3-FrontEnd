import { ThrowStmt } from "@angular/compiler";
import { AbbreviationModel } from "../../search/abbreviation-list/abbreviation.model";
import { OrganisationModel } from "../../search/abbreviation-list/organisation.model";

export class gameService{
    listOfAbbreviations: AbbreviationModel[] = [];
    listOfAnwsers: AbbreviationModel[] =[];
    listOfUsedAfk: string[] = [];

    currentAbbreviation: AbbreviationModel = new AbbreviationModel;
    wrongAbbreviation: AbbreviationModel = new AbbreviationModel;

    randomNumber: number = 0;
    randomAnwserLocation: number = 0;

    selectedOrganisatie: string = '';
    checkedAbbreviation: string = '';
    playerName: string = '';
    score: number = 0;

    totalAbbreviations: number = 0;
    maxAnwsers: number= 4;

    constructor(){
    }

    choosenOrganisatie(org: string, player: string){
        this.selectedOrganisatie = org;
        this.playerName = player;
    }

    putAbbreviationInList(data: AbbreviationModel){
        this.listOfAbbreviations.push(data);
       this.totalAbbreviations = this.listOfAbbreviations.length - 1;
    }


// SET THE QUESTIONS AND ANWSERS FOR THE GAME
    setQuestion() {        
        this.randomNumber = Math.floor(Math.random() * this.totalAbbreviations);
        this.currentAbbreviation = this.listOfAbbreviations[this.randomNumber]

        for(let i=0 ;i < this.listOfUsedAfk.length; i++){
            this.checkedAbbreviation = this.listOfUsedAfk[i];
           console.log(this.checkedAbbreviation + " : "+ this.currentAbbreviation.name);
        
           if(this.checkedAbbreviation === this.currentAbbreviation.name){
               console.log("HERE I COME");
               console.log(this.listOfAbbreviations.length);
               
                        if(this.totalAbbreviations <= this.listOfUsedAfk.length -1){
                            console.log("Alles is geweest");
                            this.listOfUsedAfk = [];
                            console.log(this.listOfUsedAfk);
                        }
               this.setQuestion();
               //BREAK THE CODE HERE
               break;
           }
       }

       this.removeChosenWord();
       console.log("CURRENT WORD: "+ this.currentAbbreviation.name);
       console.log("LIJST VAN GEBRUIKTE WORDEN");
       console.log(this.listOfUsedAfk);

       this.setListOfAnswers();
    
    }

    removeChosenWord(){
        console.log("REMOVE: "+this.listOfUsedAfk[this.listOfUsedAfk.length-1]+" : " + this.currentAbbreviation.name);
        
        if(this.listOfUsedAfk[this.listOfUsedAfk.length -1] !== this.currentAbbreviation.name){
            this.listOfUsedAfk.push(this.currentAbbreviation.name);
        }
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
        this.randomNumber = Math.floor(Math.random() * this.totalAbbreviations);
        this.wrongAbbreviation = this.listOfAbbreviations[this.randomNumber]

        if(this.wrongAbbreviation !== this.currentAbbreviation){
            this.listOfAnwsers.push(this.wrongAbbreviation);
        }else{
            this.getWrongAnwser;
        }
    }
}