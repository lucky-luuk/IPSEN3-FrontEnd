import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BulkUploadParseService} from "./bulk-upload-parse.service";
import {AbbreviationModel} from "../../afkoteek/search/abbreviation-list/abbreviation.model";
import {OrganisationModel} from "../../afkoteek/search/abbreviation-list/organisation.model";
import {AbbreviationListComponent} from "../../afkoteek/search/abbreviation-list/abbreviation-list.component";
import {HttpService} from "../../http/http.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GenericPopupComponent} from "../../features/generic-popup/generic-popup.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.scss']
})
export class BulkUploadComponent implements OnInit {
  file : File | null = null;
  extension = "";
  shouldEnablePostButton = false;
  data : {abbr: AbbreviationModel[], orgs: OrganisationModel[]} | undefined;

  @ViewChild(AbbreviationListComponent) abbrList : any;

  constructor(private parserService : BulkUploadParseService,  private modalService : NgbModal, private router : Router) {
  }
  ngOnInit(): void {
  }

  onFileSelected(event : Event) {
    if (event.target === null) return;
    let t = (event.target as HTMLInputElement);
    if (t.files === null) return;
    this.file = t.files[0];
    this.extension = this.parserService.getFileExtension(this.file.name);
  }
  onParseButtonClicked() {
    this.abbrList.showSearchingAnimation();
  }
  onParsed(data : {abbr: AbbreviationModel[], orgs: OrganisationModel[]}) {
    this.abbrList.setAbbreviationData(data.abbr);
    this.data = data;
    this.shouldEnablePostButton = true;
  }
  onPost() {
      let ref = this.modalService.open(GenericPopupComponent).componentInstance;
      ref.title = "Weet je zeker dat je deze afkortingen wil toevoegen?";
      ref.confirmText = "Voeg toe";
      ref.denyText = "Sluit af";
      ref.shouldHideDenyButton = false;
      ref.deny = () => {
        this.router.navigate(["/admin", "overview"]);
      };
      ref.confirm = () => {
          if (this.data !== undefined) {
            this.parserService.postData(this.data);
        }
      };
  }
}
