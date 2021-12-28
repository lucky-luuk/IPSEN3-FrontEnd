import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import { ModeratorModel } from 'src/app/moderator/moderator.model';
import { OrganisationModel } from 'src/app/afkoteek/search/abbreviation-list/organisation.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-add-mod-popup',
  templateUrl: './add-mod-popup.component.html',
  styleUrls: ['./add-mod-popup.component.scss']
})
export class AddModPopupComponent implements OnInit {
  organisatie: OrganisationModel = new OrganisationModel();
  data : {data:{first_name : string, last_name : string, email : string, phone : string},org: OrganisationModel};
  moderatorModel: ModeratorModel = new ModeratorModel();

  constructor(public activeModal : NgbActiveModal, private service: AdminService) {
    this.data = {data:{first_name: "",last_name: "",email: "",phone: ""},org: new OrganisationModel};
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.moderatorModel = new ModeratorModel();
    this.moderatorModel.name = this.data.data.first_name;
    this.moderatorModel.lastname = this.data.data.last_name;
    this.moderatorModel.email = this.data.data.email;
    this.moderatorModel.phone = this.data.data.phone;
    this.moderatorModel.organisatie = this.data.org;

    this.service.postModerator(this.moderatorModel);
  }
}
