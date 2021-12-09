import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AfkoteekComponent} from "./afkoteek/afkoteek.component";
import {GamePageComponent} from "./afkoteek/game/game-page/game-page.component";
import {SupportComponent} from "./afkoteek/support/support.component";
import {InfoRequestComponent} from "./afkoteek/support/info-request/info-request.component";
import {ReportComponent} from "./afkoteek/support/report/report.component";
import {AddComponent} from "./afkoteek/support/add/add.component";
import {LoginComponent} from "./moderator/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: '/afko', pathMatch: 'full'},
  { path: 'afko', component: AfkoteekComponent},
  { path: 'game', component: GamePageComponent },
  { path: 'support', component: SupportComponent,
    children: [
      {path: 'request', component: InfoRequestComponent},
      {path: 'report', component: ReportComponent},
      {path: 'add', component: AddComponent},
    ]},
  {path: 'moderator', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
