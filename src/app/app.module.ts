import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
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
    AbbreviationListComponent,
    AbbreviationComponent,
    SearchBarComponent,
    InfoRequestComponent,
    ReportComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SupportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
