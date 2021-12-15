import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-ticket-type-dropdown',
  templateUrl: './ticket-type-dropdown.component.html',
  styleUrls: ['./ticket-type-dropdown.component.scss']
})
export class TicketTypeDropdownComponent implements OnInit {
  @Output() onSelectEvent = new EventEmitter();

  public statusList: string[] = ["Geregistreerd", "In Behandeling", "On Hold", "Gereed"];

  constructor(private form: FormBuilder) {
    this.statusList = ["Geregistreerd", "In Behandeling", "On Hold", "Gereed"];
  }

  ngOnInit(): void {
  }

  submit(event: any) {
    this.onSelectEvent.emit(event.target.value);
  }
}
