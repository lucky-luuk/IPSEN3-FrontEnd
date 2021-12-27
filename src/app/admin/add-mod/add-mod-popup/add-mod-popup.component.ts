import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import { ModeratorModel } from 'src/app/moderator/moderator.model';
import { OrganisationModel } from 'src/app/afkoteek/search/abbreviation-list/organisation.model';
import { AddModService } from '../addmod.service';

@Component({
  selector: 'app-add-mod-popup',
  templateUrl: './add-mod-popup.component.html',
  styleUrls: ['./add-mod-popup.component.scss']
})
export class AddModPopupComponent implements OnInit {
  organisatie: OrganisationModel = new OrganisationModel();
  data : {data:{first_name : string, last_name : string, email : string, phone : string},org: OrganisationModel};

  constructor(public activeModal : NgbActiveModal, private service: AddModService, private modModel: ModeratorModel) {
    this.data = {data:{first_name: "",last_name: "",email: "",phone: ""},org: new OrganisationModel};
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.modModel = new ModeratorModel(
    //   this.data.data.first_name,
    //   this.data.data.last_name,
    //   this.data.data.email,
    //   this.data.data.phone,
    //   this.data.org);
    
    // this.service.postModerator([this.modModel]);
  }
}
