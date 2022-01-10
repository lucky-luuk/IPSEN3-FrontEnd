import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-popup',
  templateUrl: './admin-save-popup.component.html',
  styleUrls: ['./admin-save-popup.component.scss']
})
export class AdminSavePopupComponent implements OnInit {
  closeResult = '';

  constructor(public activeModal: NgbActiveModal) {}


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  ngOnInit(): void {
  }

}
