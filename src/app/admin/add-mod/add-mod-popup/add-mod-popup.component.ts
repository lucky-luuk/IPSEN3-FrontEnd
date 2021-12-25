import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-mod-popup',
  templateUrl: './add-mod-popup.component.html',
  styleUrls: ['./add-mod-popup.component.scss']
})
export class AddModPopupComponent implements OnInit {
  data : {first_name : string, last_name : string, email : string, phone : string};
  constructor(public activeModal : NgbActiveModal) {
    this.data = {first_name: "",last_name: "",email: "",phone: ""};
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
