import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SupportService} from "./afkoteek/support/support.service";
import {ReportedAbbreviationComponent} from './moderator/ticket/ticket-detail/reported-abbreviation/reported-abbreviation.component';
import {gameService} from './afkoteek/game/game-page/game.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {TokenInterceptorInterceptor} from "./auth/token-interceptor.interceptor";
import {AdminModule} from "./admin/admin.module";
import {ModeratorModule} from "./moderator/moderator.module";
import {AfkoteekModule} from "./afkoteek/afkoteek.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AdminModule,
    ModeratorModule,
    AfkoteekModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true}, SupportService, gameService, ReportedAbbreviationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
