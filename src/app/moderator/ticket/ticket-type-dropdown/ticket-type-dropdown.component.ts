import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {TicketStatusModel} from "../ticketStatus.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ticket-type-dropdown',
  templateUrl: './ticket-type-dropdown.component.html',
  styleUrls: ['./ticket-type-dropdown.component.scss']
})
export class TicketTypeDropdownComponent implements OnInit {
  @Output() onSelectEvent = new EventEmitter();

  public statusList: {data: string, selected: boolean}[] = [{data: TicketStatusModel.UNDER_REVIEW, selected: false},
                                                            {data: TicketStatusModel.CLOSED, selected: false},
                                                            {data: TicketStatusModel.ON_HOLD, selected: false},
                                                            {data: TicketStatusModel.REGISTERED, selected: true}];
  @Input() selectedStatus : string | null;

  constructor() {
    this.selectedStatus = null;
  }

  ngOnInit(): void {
    if (this.selectedStatus != null) {
      this.selectStatus(this.selectedStatus);
    }
  }

  submit(event: any) {
    this.onSelectEvent.emit(event.target.value);
  }

  private selectStatus(status : string) {
    console.log("selecting: " + status);
    for (let i = 0; i < this.statusList.length; i++) {
      this.statusList[i].selected = this.statusList[i].data === status;
    }
  }
}
