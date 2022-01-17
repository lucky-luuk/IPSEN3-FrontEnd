import { Component, OnInit } from '@angular/core';
import {TicketModel} from "../ticket.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ticket-has-been-edited-popup',
  templateUrl: './ticket-has-been-edited-popup.component.html',
  styleUrls: ['./ticket-has-been-edited-popup.component.scss']
})
export class TicketHasBeenEditedPopupComponent implements OnInit {
  onReloadPage : () => void = () => {};

  constructor(public activeModal : NgbActiveModal, private router : Router) { }

  ngOnInit(): void {
  }


  reloadData() {
    this.activeModal.close();
    this.onReloadPage();
  }
  close() {
    this.activeModal.close();
    this.router.navigate(["moderator", "overview"])
  }
}
