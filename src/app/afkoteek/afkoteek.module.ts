import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamePageComponent} from "./game/game-page/game-page.component";
import {SupportComponent} from "./support/support.component";
import {AbbreviationListComponent} from "./search/abbreviation-list/abbreviation-list.component";
import {AbbreviationComponent} from "./search/abbreviation-list/abbreviation/abbreviation.component";
import {SearchBarComponent} from "./search/search-bar/search-bar.component";
import {InfoRequestComponent} from "./support/info-request/info-request.component";
import {ReportComponent} from "./support/report/report.component";
import {AddComponent} from "./support/add/add.component";
import {GamePagePlayingComponent} from "./game/game-page/game-page-playing/game-page-playing.component";
import {GamePageStartComponent} from "./game/game-page/game-page-start/game-page-start.component";
import {AfkoteekComponent} from "./afkoteek.component";
import {ClickableAbbreviationComponent} from "./search/abbreviation-list/clickable-abbreviation/clickable-abbreviation.component";
import {ReportPopupComponent} from "./support/report/report-popup/report-popup.component";
import {ConfirmPopupComponent} from "./support/confirm-popup/confirm-popup.component";
import {TopPlayerListComponent} from "./game/game-page/game-page-start/top-player-list/top-player-list.component";
import {AnwserComponent} from "./game/game-page/game-page-playing/anwser/anwser.component";
import {ScoreComponent} from "./game/game-page/score/score.component";
import {AfkoteekRoutingModule} from "./afkoteek-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {SearchComponent} from "./search/search.component";
import {HeaderComponent} from "./header/header.component";
import {FeatureModule} from "../features/feature.module";
import {FooterComponent} from "./search/footer/footer.component";


@NgModule({
  declarations: [
    AfkoteekComponent,
    GamePageComponent,
    SupportComponent,
    AbbreviationComponent,
    SearchBarComponent,
    InfoRequestComponent,
    ReportComponent,
    AddComponent,
    GamePagePlayingComponent,
    GamePageStartComponent,
    ClickableAbbreviationComponent,
    ReportPopupComponent,
    ConfirmPopupComponent,
    TopPlayerListComponent,
    AnwserComponent,
    ScoreComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    AbbreviationListComponent
  ],
  imports: [
    CommonModule,
    AfkoteekRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FeatureModule
  ],
  exports: [
    AbbreviationListComponent
  ]
})
export class AfkoteekModule { }
