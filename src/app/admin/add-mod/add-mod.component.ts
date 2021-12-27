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
  organisationModel : OrganisationModel;

  constructor(private modalService : NgbModal) {
    this.organisationModel = new OrganisationModel();
  }

  ngOnInit(): void {
  }

  onSubmit(data : any) {
    let modal = this.modalService.open(AddModPopupComponent);
    modal.componentInstance.data = {data: data.form.value, org: this.organisationModel};
  }

  onSetOrganisation(org : OrganisationModel) {
    this.organisationModel = org;
  }

  shouldEnableButton() : boolean {   
    console.log("HELLO");
    
    return (this.organisationModel.name !== OrganisationModel.DEFAULT_NAME);
  }
}
