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
import {AdminPageComponent} from "./admin/admin-page/admin-page.component";
import {SettingsComponent} from "./admin/settings/settings.component";
import {SearchAdminComponent} from "./admin/search-admin/search-admin.component";
import {AddModComponent} from "./admin/add-mod/add-mod.component";
import {EditModComponent} from "./admin/edit-mod/edit-mod.component";
import {AdminComponent} from "./admin/admin.component";
import { GamePageStartComponent } from './afkoteek/game/game-page/game-page-start/game-page-start.component';
import { GamePagePlayingComponent } from './afkoteek/game/game-page/game-page-playing/game-page-playing.component';
import {LoginComponent} from "./auth/login/login.component";
import { ScoreComponent } from './afkoteek/game/game-page/score/score.component';
import {AuthGuardService} from "./auth/auth-guard.service";


export const routes: Routes = [
  { path: '', redirectTo: '/afko', pathMatch: 'full'},
  { path: 'afko', component: AfkoteekComponent},
  { path: 'spelen', component: GamePagePlayingComponent},
  { path: 'home', component: GamePageStartComponent},
  { path: 'score', component: ScoreComponent},

  { path: 'support', component: SupportComponent,
    children: [
      {path: 'request', component: InfoRequestComponent},
      {path: 'report', component: ReportComponent},
      {path: 'add', component: AddComponent},
    ]
  },
  {path: 'moderator', component: ModeratorComponent, children:[
    {path: 'ticket', component: TicketComponent},
    {path: 'overview', component: OverviewComponent},
    ],canActivate: [AuthGuardService]
  },
  { path: 'admin', component: AdminComponent, children:[
      { path: 'overzicht', component: AdminPageComponent},
      { path: ':id/edit', component: EditModComponent},
      { path: 'settings', component: SettingsComponent},
      { path: 'search-admin', component: SearchAdminComponent},
      { path: 'nieuw', component: AddModComponent},
    ]},
    ], canActivate: [AuthGuardService]
  },
   {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
