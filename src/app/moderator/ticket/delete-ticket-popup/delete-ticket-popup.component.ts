import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {TicketModel} from "../ticket.model";

@Component({
  selector: 'app-delete-ticket-popup',
  templateUrl: './delete-ticket-popup.component.html',
  styleUrls: ['./delete-ticket-popup.component.scss']
})
export class DeleteTicketPopupComponent implements OnInit {
  onDeleteCalled = () => {};

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.onDeleteCalled();
    this.activeModal.close();
  }

}
