import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountModel } from 'src/app/account.model';
import { TicketService } from '../../ticket.service';

@Component({
  selector: 'app-ticket-moderator-dropdown',
  templateUrl: './ticket-moderator-dropdown.component.html',
  styleUrls: ['./ticket-moderator-dropdown.component.scss']
})
export class TicketModeratorDropdownComponent implements OnInit {
  @Output() onSelectEvent = new EventEmitter();
  public moderators: AccountModel[] = [];

  constructor(private ticketService: TicketService,) { }

  ngOnInit(): void {
    this.ticketService.getAllModerators((data) => {
      this.moderators = data;
    })
  }

  submit(event: any){
    this.onSelectEvent.emit(event.target.value);
  }

}
