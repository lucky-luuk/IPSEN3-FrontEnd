import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AfkoteekComponent} from "./afkoteek/afkoteek.component";
import {GamePageComponent} from "./afkoteek/game/game-page/game-page.component";
import {SupportComponent} from "./afkoteek/support/support.component";
import {ModeratorComponent} from "./moderator/moderator.component";
import {TicketComponent} from "./moderator/ticket/ticket.component";
import {OverviewComponent} from "./moderator/overview/overview.component";

const routes: Routes = [
  { path: '', redirectTo: '/afko', pathMatch: 'full'},
  { path: 'afko', component: AfkoteekComponent },
  { path: 'game', component: GamePageComponent },
  { path: 'support', component: SupportComponent },
  {path: 'moderator', component: ModeratorComponent, children:[
    {path: 'ticket', component: TicketComponent},
    {path: 'overview', component: OverviewComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
