import {Component, OnInit, ViewChild} from '@angular/core';
import {AbbreviationListComponent} from "./abbreviation-list/abbreviation-list.component";
import {DropdownComponent} from "../../features/dropdown/dropdown.component";
import {OrganisationModel} from "./abbreviation-list/organisation.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // type must be any, because member is injected by angular, it must not be set in the constructor.
  @ViewChild(AbbreviationListComponent) abbreviationList: any;

  lastSearchedData : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(data : string) {
    this.lastSearchedData = data;
    this.abbreviationList.onSearch(data);
  }

  onSelectOrganisation(org : OrganisationModel) {
    this.showAbbreviationListSearchingAnimation();
    this.abbreviationList.setOrganisationIdFilter(org.id);
    this.abbreviationList.onSearch(this.lastSearchedData);
  }

  showAbbreviationListSearchingAnimation() {
    this.abbreviationList.showSearchingAnimation();
  }

}
