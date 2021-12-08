import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AfkoteekComponent} from "./afkoteek/afkoteek.component";
import {GamePageComponent} from "./afkoteek/game/game-page/game-page.component";
import {SupportComponent} from "./afkoteek/support/support.component";

const routes: Routes = [
  { path: '', redirectTo: '/afko', pathMatch: 'full'},
  { path: 'afko', component: AfkoteekComponent },
  { path: 'game', component: GamePageComponent },
  { path: 'support', component: SupportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
