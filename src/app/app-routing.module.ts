import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AfkoteekComponent} from "./afkoteek/afkoteek.component";
import {GamePageComponent} from "./afkoteek/game/game-page/game-page.component";
import {SupportComponent} from "./afkoteek/support/support.component";
import {ModeratorComponent} from "./moderator/moderator.component";
import {TicketComponent} from "./moderator/ticket/ticket.component";
import {OverviewComponent} from "./moderator/overview/overview.component";
import {InfoRequestComponent} from "./afkoteek/support/info-request/info-request.component";
import {ReportComponent} from "./afkoteek/support/report/report.component";
import {AddComponent} from "./afkoteek/support/add/add.component";
import {LoginComponent} from "./moderator/login/login.component";
import {AdminPageComponent} from "./admin/admin-page/admin-page.component";
import {SettingsComponent} from "./admin/settings/settings.component";
import {SearchAdminComponent} from "./admin/search-admin/search-admin.component";
import {AddModComponent} from "./admin/add-mod/add-mod.component";

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
  {path: 'moderator', component: ModeratorComponent, children:[
    {path: 'ticket', component: TicketComponent},
    {path: 'overview', component: OverviewComponent},
    ]
  },
  { path: 'admin', component: AdminPageComponent, children:[
      { path: 'settings', component: SettingsComponent},
      { path: 'search-admin', component: SearchAdminComponent},
      { path: 'add-mod', component: AddModComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
