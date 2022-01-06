import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbbreviationComponent} from "../abbreviation/abbreviation.component";
import {AbbreviationModel} from "../abbreviation.model";

@Component({
  selector: 'app-clickable-abbreviation',
  templateUrl: './clickable-abbreviation.component.html',
  styleUrls: ['./clickable-abbreviation.component.scss', '../abbreviation/abbreviation.component.scss']
})
export class ClickableAbbreviationComponent extends AbbreviationComponent  {
  @Output() onClicked = new EventEmitter<AbbreviationModel>();

  constructor() {
    super();
  }

  onClick() {
    this.onClicked.emit(this.abbreviation);
  }

}
