import {Component, OnInit, ViewChild} from '@angular/core';
import {AbbreviationListComponent} from "../../search/abbreviation-list/abbreviation-list.component";
import {DropdownComponent} from "../../../features/dropdown/dropdown.component";
import {OrganisationModel} from "../../search/abbreviation-list/organisation.model";
import {AbbreviationModel} from "../../search/abbreviation-list/abbreviation.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ReportPopupComponent} from "./report-popup/report-popup.component";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @ViewChild(AbbreviationListComponent) abbreviationList: any;
  @ViewChild(DropdownComponent) dropDownComponent : any;
  lastSearchedData : string = "";

  constructor(private modalService : NgbModal) {

  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  onSearch(data : string) {
    this.setLastSearchData(data);
    this.abbreviationList.onSearch(data);
  }

  setLastSearchData(data : string) {
    this.lastSearchedData = data;
  }

  onSelectOrganisation(org : OrganisationModel) {
    this.showAbbreviationListSearchingAnimation();
    this.abbreviationList.setOrganisationIdFilter(org.id);
    this.abbreviationList.onSearch(this.lastSearchedData);
  }

  onClick(abbr : AbbreviationModel) {
    const modalRef = this.modalService.open(ReportPopupComponent);
    modalRef.componentInstance.reportedAbbreviation = abbr;
  }
  showAbbreviationListSearchingAnimation() {
    this.abbreviationList.showSearchingAnimation();
  }
}
