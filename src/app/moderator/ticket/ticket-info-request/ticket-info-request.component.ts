import {Component, Input, OnInit} from '@angular/core';
import {TicketModel} from "../ticket.model";

@Component({
  selector: 'app-ticket-info-request',
  templateUrl: './ticket-info-request.component.html',
  styleUrls: ['./ticket-info-request.component.scss']
})
export class TicketInfoRequestComponent implements OnInit {
  @Input() ticket : TicketModel;
  constructor() {
    this.ticket = new TicketModel();
  }

  ngOnInit(): void {
  }

  openDefaultEmailClient() {
    let addresses = this.ticket.userEmail;//between the speech mark goes the receptient. Seperate addresses with a ;
    let body = ""//write the message text between the speech marks or put a variable in the place of the speech marks
    let subject = "Afkorijk informatie verzoek"//between the speech marks goes the subject of the message
    let href = "mailto:" + addresses + "?"
      + "subject=" + subject + "&"
      + "body=" + body;
    window.open(href, "_blank", "scrollbars=yes,resizable=yes,width=300,height=300");
  }
}
