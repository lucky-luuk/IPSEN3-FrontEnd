import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OrganisationModel} from "../../../afkoteek/search/abbreviation-list/organisation.model";
import {FormBuilder} from "@angular/forms";
import {OrganisationService} from "../../../features/dropdown/organisation.service";

@Component({
  selector: 'app-mod-dropdown',
  templateUrl: './mod-dropdown.component.html',
  styleUrls: ['./mod-dropdown.component.scss']
})
export class ModDropdownComponent implements OnInit {
  @Output() onSelectEvent = new EventEmitter();

  public organisations: OrganisationModel[];
  public static readonly NO_ORGANISATION_SELECTED_ID = "NO_ID";
  public static readonly NO_ORGANISATION_SELECTED_NAME = "selecteer een organisatie";

  constructor(private form: FormBuilder, private http : OrganisationService) {
    this.organisations = [];

    this.http.getAllOrganisations((orgs : OrganisationModel[]) => {
      this.fillOrganisationsArray(orgs);
    });
  }

  ngOnInit(): void {
  }

  submit(event : any) {
    let id = this.getOrganisationIdFromName(event.target.value);
    if (id !== -1) {
      this.onSelectEvent.emit(id);
    }
  }

  private getOrganisationIdFromName(name : string) {
    for (let i = 0; i < this.organisations.length; i++) {
      if (this.organisations[i].name === name) {
        return this.organisations[i].id;
      }
    }
    return -1;
  }

  private fillOrganisationsArray(orgs : OrganisationModel[]) : void {
    // create default organisation
    let defaultOrg = new OrganisationModel();
    defaultOrg.id = ModDropdownComponent.NO_ORGANISATION_SELECTED_ID;
    defaultOrg.name = ModDropdownComponent.NO_ORGANISATION_SELECTED_NAME;
    this.organisations.push(defaultOrg);

    orgs.forEach((org) => {
      this.organisations.push(org);
    });
  }

}
