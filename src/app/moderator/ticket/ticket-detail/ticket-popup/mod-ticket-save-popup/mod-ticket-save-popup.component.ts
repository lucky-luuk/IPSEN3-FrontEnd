import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AbbreviationModel} from "../../../../../afkoteek/search/abbreviation-list/abbreviation.model";
import {AbbreviationService} from "../../../../../afkoteek/search/abbreviation-list/abbreviation.service";

@Component({
  selector: 'app-mod-ticket-save-popup',
  templateUrl: './mod-ticket-save-popup.component.html',
  styleUrls: ['./mod-ticket-save-popup.component.scss']
})
export class ModTicketSavePopupComponent implements OnInit {
  closeResult = '';

  onClose = ()=>{}

  abbreviation = new AbbreviationModel();
  constructor(public activeModal: NgbActiveModal, private abbreviationService: AbbreviationService) {}


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSave(){
    this.activeModal.close();
    this.onClose();
  }
  ngOnInit(): void {
  }

}
