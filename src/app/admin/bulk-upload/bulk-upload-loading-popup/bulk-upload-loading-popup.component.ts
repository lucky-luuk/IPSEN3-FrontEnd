import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-bulk-upload-loading-popup',
  templateUrl: './bulk-upload-loading-popup.component.html',
  styleUrls: ['./bulk-upload-loading-popup.component.scss']
})
export class BulkUploadLoadingPopupComponent implements OnInit {
  isDone = false;
  bodyText = "";
  size = 0;
  incrementAmount = 0;
  progress = 0;
  percentage = "0%"

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
    this.activeModal
  }

  onConfirm() {
    this.activeModal.close();
  }
  onDone() {
    this.isDone = true;
  }
  incrementProgressBar() {
    this.progress += this.incrementAmount;
    if (this.progress >= (this.size))
      this.onDone();
    this.setProgressBarPercentage();
  }
  setProgressBarPercentage() {
    this.percentage = ((this.progress / this.size) * 100) + "%";
  }
}
