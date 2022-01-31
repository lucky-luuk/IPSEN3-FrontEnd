import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModeratorComponent} from "./moderator/moderator.component";
import {TicketComponent} from "./moderator/ticket/ticket.component";
import {OverviewComponent} from "./moderator/overview/overview.component";
import {LoginComponent} from "./auth/login/login.component";
import {RoleGuardService} from "./auth/role-guard.service";


export const routes: Routes = [
  { path: '', redirectTo: '/afko', pathMatch: 'full'},



   {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
