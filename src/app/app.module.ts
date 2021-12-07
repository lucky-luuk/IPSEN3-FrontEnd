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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AfkoteekComponent,
    SearchComponent,
    ResultComponent,
    FooterComponent,
    DropdownComponent
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
