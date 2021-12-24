import { Component, OnInit } from '@angular/core';
import {AbbreviationModel} from "../../../search/abbreviation-list/abbreviation.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-report-popup',
  templateUrl: './report-popup.component.html',
  styleUrls: ['./report-popup.component.scss']
})
export class ReportPopupComponent implements OnInit {
  reportedAbbreviation : AbbreviationModel = new AbbreviationModel();
  private description : string = "";

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // send http request...
    // mischien een captcha toevoegen?
    this.activeModal.close();
  }

  onSetDescription(event : any) {
    this.description = event.target.value;
  }
}
