import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {AfkoteekComponent} from "./afkoteek/afkoteek.component";
import {ResultComponent} from "./afkoteek/result/result.component";
import {FooterComponent} from "./footer/footer.component";
import {DropdownComponent} from "./afkoteek/dropdown/dropdown.component";
import {SearchComponent} from "./afkoteek/search/search.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GamePageComponent } from './afkoteek/game/game-page/game-page.component';
import { SupportComponent } from './afkoteek/support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AfkoteekComponent,
    SearchComponent,
    ResultComponent,
    FooterComponent,
    DropdownComponent,
    GamePageComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
