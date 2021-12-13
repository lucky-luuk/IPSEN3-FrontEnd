import {Component, Input, OnInit} from '@angular/core';
import {AbbreviationModel} from "../abbreviation.model";

@Component({
  selector: 'app-abbreviation',
  templateUrl: './abbreviation.component.html',
  styleUrls: ['./abbreviation.component.scss']
})
export class AbbreviationComponent implements OnInit {
  @Input() abbreviation : AbbreviationModel;

  constructor() {
    this.abbreviation = new AbbreviationModel();
  }

  ngOnInit(): void {
  }

  getAllOrganisationNamesAsString() : string {
    let data : string[] = [];
    for (let i = 0; i < this.abbreviation.organisations.length; i++) {
      data.push(this.abbreviation.organisations[i].name);
    }
    return data.join(", ");
  }
}
