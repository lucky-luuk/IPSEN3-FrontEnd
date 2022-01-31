import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModeratorComponent} from "./moderator.component";
import {TicketComponent} from "./ticket/ticket.component";
import {OverviewComponent} from "./overview/overview.component";
import {RoleGuardService} from "../auth/role-guard.service";

const routes: Routes = [
  {path: 'moderator', component: ModeratorComponent, children:[
      {path: 'ticket', component: TicketComponent},
      {path: 'overzicht', component: OverviewComponent},
    ],canActivate: [RoleGuardService], data: {expectedRole: 'MOD'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeratorRoutingModule { }
