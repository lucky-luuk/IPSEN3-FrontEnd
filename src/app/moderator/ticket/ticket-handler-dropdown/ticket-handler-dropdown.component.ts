import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginService} from "../../../auth/login.service";
import {AccountModel} from "../../../account.model";
import {TicketModel} from "../ticket.model";
import {OrganisationModel} from "../../../afkoteek/search/abbreviation-list/organisation.model";

@Component({
  selector: 'app-ticket-handler-dropdown',
  templateUrl: './ticket-handler-dropdown.component.html',
  styleUrls: ['./ticket-handler-dropdown.component.scss']
})
export class TicketHandlerDropdownComponent implements OnInit {
  @Input()
  ticket! : TicketModel;
  @Output()
  onSelect = new EventEmitter<string>();
  accounts : {account: AccountModel, selected: boolean}[] = [];
  constructor(private loginService : LoginService) {
  }

  ngOnInit(): void {
    this.loginService.getAllAccounts((data) => {
      this.setAccounts(data);
    });
  }

  submit(event : any) {
    let id = event.target.value;
    this.onSelect.emit(id);
  }

  private setAccounts(accounts : AccountModel[]) {
    for (let a of accounts) {
      this.accounts.push({account: a, selected: a.id === this.ticket.accountId});
    }
  }

  public selectHandler(id : string) {
    this.setSelectedHandler(id);
  }
  private setSelectedHandler(id : string) {
    for (let i = 0; i < this.accounts.length; i++) {
      this.accounts[i].selected = this.accounts[i].account.id === id;
    }
  }
}
