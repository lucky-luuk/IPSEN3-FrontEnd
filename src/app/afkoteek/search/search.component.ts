import {Component, OnInit, ViewChild} from '@angular/core';
import {AbbreviationListComponent} from "./abbreviation-list/abbreviation-list.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // type must be any, because member is injected by angular, it must not be set in the constructor.
  @ViewChild(AbbreviationListComponent) abbreviationList: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(data : string) {
    this.abbreviationList.onSearch(data);
  }
}
