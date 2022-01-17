import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-handle-ticket-popup',
  templateUrl: './handle-ticket-popup.component.html',
  styleUrls: ['./handle-ticket-popup.component.scss']
})
export class HandleTicketPopupComponent implements OnInit {
  onHandled = () => {};

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

  handle() {
    this.activeModal.close();
    this.onHandled();
  }

}
