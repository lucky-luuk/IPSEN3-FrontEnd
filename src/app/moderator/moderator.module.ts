import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModeratorComponent} from "./moderator.component";
import {TicketComponent} from "./ticket/ticket-detail/ticket.component";
import {OverviewComponent} from "./ticket/overview/overview.component";
import {NewAbbreviationComponent} from "./ticket/ticket-detail/new-abbreviation/new-abbreviation.component";
import {TicketRowComponent} from "./ticket/overview/ticket-row/ticket-row.component";
import {TicketTypeDropdownComponent} from "./ticket/ticket-detail/ticket-type-dropdown/ticket-type-dropdown.component";
import {TicketInfoRequestComponent} from "./ticket/ticket-detail/ticket-info-request/ticket-info-request.component";
import {ModTicketSavePopupComponent} from "./ticket/ticket-detail/ticket-popup/mod-ticket-save-popup/mod-ticket-save-popup.component";
import {NotSavedPopupComponent} from "./ticket/ticket-detail/ticket-popup/not-saved-popup/not-saved-popup.component";
import {PopupNotSavedComponent} from "../admin/popup-not-saved/popup-not-saved.component";
import {TicketHasBeenEditedPopupComponent} from "./ticket/ticket-detail/ticket-popup/ticket-has-been-edited-popup/ticket-has-been-edited-popup.component";
import {DeleteTicketPopupComponent} from "./ticket/ticket-detail/ticket-popup/delete-ticket-popup/delete-ticket-popup.component";
import {HandleTicketPopupComponent} from "./ticket/ticket-detail/ticket-popup/handle-ticket-popup/handle-ticket-popup.component";
import {ModHeaderComponent} from "./mod-header/mod-header.component";
import {FirstLoginPopupComponent} from "../auth/first-login-popup/first-login-popup.component";
import {ReportedAbbreviationComponent} from "./ticket/ticket-detail/reported-abbreviation/reported-abbreviation.component";
import {TicketHandlerDropdownComponent} from "./ticket/ticket-detail/ticket-handler-dropdown/ticket-handler-dropdown.component";
import {ModeratorRoutingModule} from "./moderator-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {FeatureModule} from "../features/feature.module";



@NgModule({
  declarations: [
    ModeratorComponent,
    TicketComponent,
    OverviewComponent,
    NewAbbreviationComponent,
    TicketRowComponent,
    TicketTypeDropdownComponent,
    TicketInfoRequestComponent,
    ModTicketSavePopupComponent,
    NotSavedPopupComponent,
    PopupNotSavedComponent,
    TicketHasBeenEditedPopupComponent,
    DeleteTicketPopupComponent,
    HandleTicketPopupComponent,
    ModHeaderComponent,
    FirstLoginPopupComponent,
    ReportedAbbreviationComponent,
    TicketHandlerDropdownComponent,
  ],
  imports: [
    CommonModule,
    ModeratorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FeatureModule
  ]
})
export class ModeratorModule { }
