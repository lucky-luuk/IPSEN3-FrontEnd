import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent implements OnInit {
  headerText : string;
  bodyText : string;
  submitText : string;
  onSubmit : () => void;

  constructor(public activeModal : NgbActiveModal) {
    this.headerText = "";
    this.bodyText = "";
    this.submitText = "";
    this.onSubmit = () => {};
  }

  submit() {
    this.onSubmit();
    this.activeModal.close();
  }

  ngOnInit(): void {
  }

}
