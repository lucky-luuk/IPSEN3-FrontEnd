import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./afkoteek/header/header.component";
import {AfkoteekComponent} from "./afkoteek/afkoteek.component";
import {FooterComponent} from "./afkoteek/search/footer/footer.component";
import {DropdownComponent} from "./afkoteek/search/dropdown/dropdown.component";
import {SearchComponent} from "./afkoteek/search/search.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GamePageComponent } from './afkoteek/game/game-page/game-page.component';
import { SupportComponent } from './afkoteek/support/support.component';
import {AbbreviationListComponent} from "./afkoteek/search/abbreviation-list/abbreviation-list.component";
import { AbbreviationComponent } from './afkoteek/search/abbreviation-list/abbreviation/abbreviation.component';
import { SearchBarComponent } from './afkoteek/search/search-bar/search-bar.component';
import { InfoRequestComponent } from './afkoteek/support/info-request/info-request.component';
import { ReportComponent } from './afkoteek/support/report/report.component';
import { AddComponent } from './afkoteek/support/add/add.component';
import {SupportService} from "./afkoteek/support/support.service";
import {HeaderService} from "./afkoteek/header/header.service";
import { ModeratorComponent } from './moderator/moderator.component';
import { TicketComponent } from './moderator/ticket/ticket.component';
import { OverviewComponent } from './moderator/overview/overview.component';
import { NewAbbreviationComponent } from './moderator/ticket/new-abbreviation/new-abbreviation.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { SearchAdminComponent } from './admin/search-admin/search-admin.component';
import { AddModComponent } from './admin/add-mod/add-mod.component';
import { GamePagePlayingComponent } from './afkoteek/game/game-page/game-page-playing/game-page-playing.component';
import { GamePageStartComponent } from './afkoteek/game/game-page/game-page-start/game-page-start.component';
import { ReportedAbbreviationComponent } from './moderator/ticket/reported-abbreviation/reported-abbreviation.component';
import { TicketRowComponent } from './moderator/overview/ticket-row/ticket-row.component';
import { TicketTypeDropdownComponent } from './moderator/ticket/ticket-type-dropdown/ticket-type-dropdown.component';
import { UserComponent } from './admin/overview/user/user.component';
import { AdminOverviewComponent} from "./admin/overview/admin-overview.component";
import { EditModComponent } from './admin/edit-mod/edit-mod.component';
import { AdminComponent } from './admin/admin.component';
import { gameService } from './afkoteek/game/game-page/Game.service';
import { ModDropdownComponent } from './admin/edit-mod/mod-dropdown/mod-dropdown.component';
import { ClickableAbbreviationComponent } from './afkoteek/search/abbreviation-list/clickable-abbreviation/clickable-abbreviation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportPopupComponent } from './afkoteek/support/report/report-popup/report-popup.component';
import { LoadingAnimationComponent } from './afkoteek/search/abbreviation-list/loading-animation/loading-animation.component';
import { SearchModeratorComponent } from './admin/overview/search-moderator/search-moderator.component';
import { AddModPopupComponent } from './admin/add-mod/add-mod-popup/add-mod-popup.component';
import {TicketInfoRequestComponent} from "./moderator/ticket/ticket-info-request/ticket-info-request.component";
import { ConfirmPopupComponent } from './afkoteek/support/confirm-popup/confirm-popup.component';
import {RouterModule} from "@angular/router";
import { TopPlayerListComponent } from './afkoteek/game/game-page/game-page-start/top-player-list/top-player-list.component';
import { AnwserComponent } from './afkoteek/game/game-page/game-page-playing/anwser/anwser.component';
import { ScoreComponent } from './afkoteek/game/game-page/score/score.component';
import { AdminSavePopupComponent } from './admin/edit-mod/admin-save-popup/admin-save-popup.component';
import { ModTicketSavePopupComponent } from './moderator/ticket/mod-ticket-save-popup/mod-ticket-save-popup.component';
import { NotSavedPopupComponent } from './moderator/ticket/not-saved-popup/not-saved-popup.component';
import { PopupNotSavedComponent } from './admin/popup-not-saved/popup-not-saved.component';
import { TicketHasBeenEditedPopupComponent } from './moderator/ticket/ticket-has-been-edited-popup/ticket-has-been-edited-popup.component';
import { DeleteTicketPopupComponent } from './moderator/ticket/delete-ticket-popup/delete-ticket-popup.component';
import { HandleTicketPopupComponent } from './moderator/ticket/handle-ticket-popup/handle-ticket-popup.component';
import { TicketModeratorDropdownComponent } from './moderator/ticket/ticket-moderator-dropdown/ticket-moderator-dropdown.component';
import {AdminHeaderComponent} from "./admin/admin-header/admin-header.component";
import {ModHeaderComponent} from "./moderator/mod-header/mod-header.component";
import {LoginComponent} from "./auth/login/login.component";
import {BulkUploadComponent} from "./admin/bulk-upload/bulk-upload.component";
import {BulkUploadLoadingPopupComponent} from "./admin/bulk-upload/bulk-upload-loading-popup/bulk-upload-loading-popup.component";
import {CsvParserComponent} from "./admin/bulk-upload/csv-parser/csv-parser.component";
import {JsonParserLayoutRowComponent} from "./admin/bulk-upload/json-parser/json-parser-layout/json-parser-layout-row/json-parser-layout-row.component";
import {JsonParserLayoutComponent} from "./admin/bulk-upload/json-parser/json-parser-layout/json-parser-layout.component";
import {JsonParserLayoutDropdownComponent} from "./admin/bulk-upload/json-parser/json-parser-layout/json-parser-layout-dropdown/json-parser-layout-dropdown.component";
import {JsonParserComponent} from "./admin/bulk-upload/json-parser/json-parser.component";
import {GenericPopupComponent} from "./generic-popup/generic-popup.component";
import {TokenInterceptorInterceptor} from "./auth/token-interceptor.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AfkoteekComponent,
    SearchComponent,
    FooterComponent,
    DropdownComponent,
    GamePageComponent,
    SupportComponent,
    ModeratorComponent,
    TicketComponent,
    OverviewComponent,
    NewAbbreviationComponent,
    AbbreviationListComponent,
    AbbreviationComponent,
    SearchBarComponent,
    InfoRequestComponent,
    ReportComponent,
    AddComponent,
    AdminPageComponent,
    SettingsComponent,
    SearchAdminComponent,
    AddModComponent,
    GamePagePlayingComponent,
    GamePageStartComponent,
    ReportedAbbreviationComponent,
    TicketRowComponent,
    TicketTypeDropdownComponent,
    UserComponent,
    AdminOverviewComponent,
    EditModComponent,
    AdminComponent,
    LoginComponent,
    ModDropdownComponent,
    ClickableAbbreviationComponent,
    ReportPopupComponent,
    LoadingAnimationComponent,
    SearchModeratorComponent,
    AddModPopupComponent,
    TicketInfoRequestComponent,
    ConfirmPopupComponent,
    TopPlayerListComponent,
    AnwserComponent,
    ScoreComponent,
    AdminSavePopupComponent,
    ModTicketSavePopupComponent,
    NotSavedPopupComponent,
    PopupNotSavedComponent,
    TicketHasBeenEditedPopupComponent,
    DeleteTicketPopupComponent,
    HandleTicketPopupComponent,
    TicketModeratorDropdownComponent,
    AdminHeaderComponent,
    ModHeaderComponent,
    BulkUploadComponent,
    BulkUploadLoadingPopupComponent,
    CsvParserComponent,
    JsonParserLayoutRowComponent,
    JsonParserLayoutComponent,
    JsonParserLayoutDropdownComponent,
    JsonParserComponent,
    GenericPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true}, SupportService, HeaderService, gameService, ReportedAbbreviationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
