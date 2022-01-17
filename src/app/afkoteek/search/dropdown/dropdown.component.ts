import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {OrganisationService} from "./organisation.service";
import {OrganisationModel} from "../abbreviation-list/organisation.model";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Output() onSelectEvent = new EventEmitter();
  @Input() selectedOrganisation : OrganisationModel | null = null;

  public organisations : Array<{org: OrganisationModel, selected: boolean}>;
  private static readonly NO_ORGANISATION_SELECTED_ID = "NO_ID";
  private static readonly NO_ORGANISATION_SELECTED_NAME = "selecteer een organisatie";

  constructor(private fb: FormBuilder, private http : OrganisationService) {
    this.organisations = new Array<{org: OrganisationModel; selected: boolean}>();

    this.http.getAllOrganisations((orgs : OrganisationModel[]) => {
      this.fillOrganisationsArray(orgs);
    });
  }

  ngOnInit(): void {
  }

  submit(event : any) {
    let org = this.getOrganisationFromName(event.target.value);
    if (org.id !== DropdownComponent.NO_ORGANISATION_SELECTED_ID) {
      this.onSelectEvent.emit(org);
    }
    else {
      this.onSelectEvent.emit(new OrganisationModel());
    }
  }

  // returns -1 if no id is found
  public getOrganisationFromName(name : string) : OrganisationModel{
    for (let i = 0; i < this.organisations.length; i++) {
      if (this.organisations[i].org.name === name) {
        return this.organisations[i].org;
      }
    }
    let org = new OrganisationModel();
    org.id = DropdownComponent.NO_ORGANISATION_SELECTED_ID;
    return org;
  }

  private fillOrganisationsArray(orgs : OrganisationModel[]) : void {
    // create default organisation
    let defaultOrg = new OrganisationModel();
    defaultOrg.id = DropdownComponent.NO_ORGANISATION_SELECTED_ID;
    defaultOrg.name = DropdownComponent.NO_ORGANISATION_SELECTED_NAME;
    this.organisations.push({org: defaultOrg,selected: true});

    orgs.forEach((org) => {
      this.organisations.push({org: org,selected: false});
    });
    // work around for async issues
    if (this.selectedOrganisation != null) {
      this.setSelectedOrganisation(this.selectedOrganisation);
    }
  }

  // set the organisation to be selected when creating the organisation list
  // work around for the list being filled after instantiation
  public selectOrganisation(org : OrganisationModel | null) {
    this.selectedOrganisation = org;
    if (org !== null)
      this.setSelectedOrganisation(org);
  }
  private setSelectedOrganisation(org : OrganisationModel) {
    for (let i = 0; i < this.organisations.length; i++) {
      this.organisations[i].selected = this.organisations[i].org.name === org.name;
    }
  }
}
