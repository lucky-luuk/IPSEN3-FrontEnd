import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-generic-popup',
  templateUrl: './generic-popup.component.html',
  styleUrls: ['./generic-popup.component.scss']
})
export class GenericPopupComponent implements OnInit {
  shouldHideDenyButton = true;
  title : string = "";
  body : string = "";
  confirmText : string = "";
  denyText : string = "";
  confirm = () => {};
  deny = () => {};

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

  onConfirm() {
    this.confirm();
    this.activeModal.close();
  }
  onDeny() {
    this.activeModal.close();
    this.deny();
  }

}
