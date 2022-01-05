import { AbbreviationModel } from "../../search/abbreviation-list/abbreviation.model";

export class gameService{
    holderOfAbbreviations: AbbreviationModel[] =[];
    listOfAbbreviations: AbbreviationModel[] = [];
    listOfAnwsers: AbbreviationModel[] =[];
    listOfUsedAfk: string[] = [];

    currentAbbreviation: AbbreviationModel = new AbbreviationModel;
    wrongAbbreviation: AbbreviationModel = new AbbreviationModel;

    randomNumber: number = 0;
    randomAnwserLocation: number = 0;
    goOn: boolean = true;

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
}