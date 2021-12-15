export class gameService{
    name: string;
    organisation: string;

    constructor(){
        this.name = '';
        this.organisation = '';
    }

    public addGameInfo(name: string){
        this.name = name;
        // this.organisation = orgName;
    }
}