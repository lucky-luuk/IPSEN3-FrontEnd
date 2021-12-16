import {Component, OnInit, ViewChild} from '@angular/core';
import {AbbreviationListComponent} from "../../search/abbreviation-list/abbreviation-list.component";
import {AbbreviationModel} from "../../search/abbreviation-list/abbreviation.model";
import {AbbreviationService} from "../../search/abbreviation-list/abbreviation.service";
import {DropdownComponent} from "../../search/dropdown/dropdown.component";
import {OrganisationModel} from "../../search/abbreviation-list/organisation.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild(AbbreviationListComponent) abbreviationList: any;
  @ViewChild(DropdownComponent) dropDownComponent : any;
  model : AbbreviationModel;

  constructor(private http : AbbreviationService) {
    this.model = new AbbreviationModel();
  }

  ngOnInit(): void {
  }

  onSubmit() : void {

  }

  onSearch(data : string) : void {
    this.abbreviationList.onSearch(data);
    this.model.name = data;
  }

  onSelectOrganisation(org : OrganisationModel) {
    this.model.organisations.push(org);
  }

  onSetDescription(event : any) {
    this.model.description = event.target.value;
  }

  shouldEnableButton() : boolean {
    return this.model.name !== AbbreviationModel.DEFAULT_NAME
      && this.model.organisations.length !== 0
      && this.model.description !== AbbreviationModel.DEFAULT_DESCRIPTION
  }


}
