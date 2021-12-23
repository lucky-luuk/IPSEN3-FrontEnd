import {Component, OnInit, ViewChild} from '@angular/core';
import {AbbreviationListComponent} from "../../search/abbreviation-list/abbreviation-list.component";
import {DropdownComponent} from "../../search/dropdown/dropdown.component";
import {OrganisationModel} from "../../search/abbreviation-list/organisation.model";
import {AbbreviationModel} from "../../search/abbreviation-list/abbreviation.model";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @ViewChild(AbbreviationListComponent) abbreviationList: any;
  @ViewChild(DropdownComponent) dropDownComponent : any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  onSearch(data : string) {
    this.abbreviationList.onSearch(data);
  }

  onSelectOrganisation(org : OrganisationModel) {
    this.abbreviationList.setOrganisationIdFilter(org.id);
    this.abbreviationList.onSearch()
  }

  onClick(abbr : AbbreviationModel) {
    console.log(abbr);
  }
}
