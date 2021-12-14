import { AbbreviationModel } from "../../search/abbreviation-list/abbreviation.model";

export class Game{
    // public AbbrModel: AbbreviationModel[];
    // public CurrentAbbr: AbbreviationModel;
    // public RemovedAbbr: AbbreviationModel[];
    // public Awnsers: AbbreviationModel[];

    public name: string;
    public totalScore: number;

    constructor(name: string, totalScore: number){
        this.name = name;
        this.totalScore = totalScore;
        // this.AbbrModel = ;
        // this.CurrentAbbr = ;
        // this.RemovedAbbr = ;
        // this.Awnsers = ;
    }
}