import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {TicketModel} from "../../../ticket.model";


@Component({
  selector: 'app-not-saved-popup',
  templateUrl: './not-saved-popup.component.html',
  styleUrls: ['./not-saved-popup.component.scss']
})
export class NotSavedPopupComponent implements OnInit {

  onClose = ()=>{}
  data: TicketModel;

  constructor(public activeModal: NgbActiveModal) {
    this.data = new TicketModel();
  }

  onSave(){
    this.activeModal.close();
    this.onClose();
  }

  ngOnInit(): void {
  }

}
