import {Component} from '@angular/core';
import {HttpService} from "./http.service";
import {Title} from "@angular/platform-browser";
import {AbbreviationService} from "./afkoteek/search/abbreviation-list/abbreviation.service";
import {AbbreviationModel} from "./afkoteek/search/abbreviation-list/abbreviation.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AFKORIJK';

  constructor(private titleService : Title, private http : AbbreviationService) {
    this.titleService.setTitle(this.title);
  }

}
