import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from "./afkoteek/search/footer/footer.component";
import {DropdownComponent} from "./features/dropdown/dropdown.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SupportService} from "./afkoteek/support/support.service";
import {ReportedAbbreviationComponent} from './moderator/ticket/reported-abbreviation/reported-abbreviation.component';
import {UserComponent} from './admin/overview/user/user.component';
import {gameService} from './afkoteek/game/game-page/game.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoadingAnimationComponent} from './afkoteek/search/abbreviation-list/loading-animation/loading-animation.component';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {GenericPopupComponent} from "./generic-popup/generic-popup.component";
import {TokenInterceptorInterceptor} from "./auth/token-interceptor.interceptor";
import {AdminModule} from "./admin/admin.module";
import {ModeratorModule} from "./moderator/moderator.module";
import {AfkoteekModule} from "./afkoteek/afkoteek.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GenericPopupComponent,
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
