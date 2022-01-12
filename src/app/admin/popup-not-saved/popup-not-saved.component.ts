import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-popup-not-saved',
  templateUrl: './popup-not-saved.component.html',
  styleUrls: ['./popup-not-saved.component.scss']
})
export class PopupNotSavedComponent implements OnInit {

  onClose = () => {}

  data: { afkorting: string, beschrijving: string }
  constructor(public activeModal: NgbActiveModal) {
    this.data = {afkorting: "er is geen afkorting", beschrijving: "er is geen beschrijving"}
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSave() {
    this.activeModal.close();
    this.onClose();
  }

  ngOnInit(): void {
  }
}
