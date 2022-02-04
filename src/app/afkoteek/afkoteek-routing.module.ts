import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AfkoteekComponent} from "./afkoteek.component";
import {GamePagePlayingComponent} from "./game/game-page/game-page-playing/game-page-playing.component";
import {GamePageStartComponent} from "./game/game-page/game-page-start/game-page-start.component";
import {ScoreComponent} from "./game/game-page/score/score.component";
import {SupportComponent} from "./support/support.component";
import {InfoRequestComponent} from "./support/info-request/info-request.component";
import {ReportComponent} from "./support/report/report.component";
import {AddComponent} from "./support/add/add.component";

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfkoteekRoutingModule { }
