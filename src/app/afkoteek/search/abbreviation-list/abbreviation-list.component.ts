import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AbbreviationService} from "./abbreviation.service";
import {AbbreviationModel} from "./abbreviation.model";
import {DropdownComponent} from "../dropdown/dropdown.component";
import {OrganisationModel} from "./organisation.model";

@Component({
  selector: 'app-abbreviation-list',
  templateUrl: './abbreviation-list.component.html',
  styleUrls: ['./abbreviation-list.component.scss']
})
export class AbbreviationListComponent implements OnInit {
  abbreviations : AbbreviationModel[] = [];
  private http : AbbreviationService;
  organisationIdFilter : string = OrganisationModel.DEFAULT_ID;
  public shouldShowSearchingAnimation = false;
  //  used to set the height of the list, makes stuff a whole lot easier
  @Input() list_height : string = "45vh";
  @Input() shouldUseClickableAbbreviationComponent = false;
  @Output() onAbbreviationClick = new EventEmitter<AbbreviationModel>();

  constructor(private h : AbbreviationService) {
    this.http = h;
  }

  ngOnInit(): void {}

  onSearch(name : string) : void {
    // search by name only
    if (this.organisationIdFilter === OrganisationModel.DEFAULT_ID) {
      this.http.getAbbreviationsByName(name, (data) => {
        this.setAbbreviationData(data);
      }, () => {
        this.setAbbreviationData([])
      });
    }
    // search by organisation id
    else if (name === "") {
      this.http.geAbbreviationByOrgId(this.organisationIdFilter, (data) => {
        this.setAbbreviationData(data);
      }, () => {
        this.setAbbreviationData([])
      });
    }
    // search by org id and name
    else {
      this.http.getAbbreviationByOrgIdAndName(name, this.organisationIdFilter, (data) => {
        this.setAbbreviationData(data);
      }, () => {
        this.setAbbreviationData([])
      });
    }
  }

  setOrganisationIdFilter(id : string) {
    this.organisationIdFilter = id;
  }

  public setAbbreviationData(data : AbbreviationModel[] | null) {
    this.shouldShowSearchingAnimation = false;
    if (data === null) {
      this.abbreviations = [];
    }
    else {
      this.abbreviations = data;
    }
  }

  onAbbreviationClicked(abbr : AbbreviationModel) {
    this.onAbbreviationClick.emit(abbr);
  }

  showSearchingAnimation() {
    this.abbreviations = [];
    this.shouldShowSearchingAnimation = true;
  }
}
