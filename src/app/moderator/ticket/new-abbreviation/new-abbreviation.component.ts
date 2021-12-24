import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {AbbreviationModel} from "../../../afkoteek/search/abbreviation-list/abbreviation.model";
import {AbbreviationService} from "../../../afkoteek/search/abbreviation-list/abbreviation.service";
import {DropdownComponent} from "../../../afkoteek/search/dropdown/dropdown.component";

@Component({
  selector: 'app-new-abbreviation',
  templateUrl: './new-abbreviation.component.html',
  styleUrls: ['./new-abbreviation.component.scss']
})
export class NewAbbreviationComponent implements OnInit, AfterViewInit {
  @Input() abbrModel: AbbreviationModel;
  @ViewChild(DropdownComponent) dropdown : any;

  constructor() {
   this.abbrModel = new AbbreviationModel();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() : void {
    this.dropdown.selectOrganisation(this.abbrModel.organisations[0]);
  }

}
