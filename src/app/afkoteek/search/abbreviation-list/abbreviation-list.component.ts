import {Component, Input, OnInit} from '@angular/core';
import {AbbreviationService} from "./abbreviation.service";
import {AbbreviationModel} from "./abbreviation.model";

@Component({
  selector: 'app-abbreviation-list',
  templateUrl: './abbreviation-list.component.html',
  styleUrls: ['./abbreviation-list.component.scss']
})
export class AbbreviationListComponent implements OnInit {
  abbreviations : AbbreviationModel[] = [];
  private http : AbbreviationService;

  constructor(private h : AbbreviationService) {
    this.http = h;
    this.onSearch("a");
  }

  onSearch(name : string) : void {
    this.http.getAbbreviationsByName(name, (data) => {
      this.abbreviations = data;
    });
  }
  ngOnInit(): void {
  }

}
