import { Component, OnInit } from '@angular/core';
import {OrganisationModel} from "../../afkoteek/search/abbreviation-list/organisation.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddModPopupComponent} from "./add-mod-popup/add-mod-popup.component";

@Component({
  selector: 'app-add-mod',
  templateUrl: './add-mod.component.html',
  styleUrls: ['./add-mod.component.scss']
})
export class AddModComponent implements OnInit {

  constructor(private modalService : NgbModal) {
  }

  ngOnInit(): void {
  }

  onSubmit(data : any) {
    let modal = this.modalService.open(AddModPopupComponent);
    modal.componentInstance.data = data.form.value;
  }
}
