import {Component, Input, OnInit} from '@angular/core';
import {AbbreviationModel} from "../../../afkoteek/search/abbreviation-list/abbreviation.model";
import {AbbreviationService} from "../../../afkoteek/search/abbreviation-list/abbreviation.service";

@Component({
  selector: 'app-new-abbreviation',
  templateUrl: './new-abbreviation.component.html',
  styleUrls: ['./new-abbreviation.component.scss']
})
export class NewAbbreviationComponent implements OnInit {
 @Input() abbrModel: AbbreviationModel;

  constructor(private abbrService: AbbreviationService) {
   this.abbrModel = new AbbreviationModel();
  }

  ngOnInit(): void {
  }

}
