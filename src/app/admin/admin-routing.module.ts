import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {EditModComponent} from "./moderator-details/edit-mod/edit-mod.component";
import {SettingsComponent} from "./settings/settings.component";
import {SearchAdminComponent} from "./search-admin/search-admin.component";
import {AddModComponent} from "./new-mod/add-mod.component";
import {BulkUploadComponent} from "./bulk-upload/bulk-upload.component";
import {RoleGuardService} from "../auth/role-guard.service";
import {AdminOverviewComponent} from "./moderator-details/overview/admin-overview.component";

const routes: Routes = [
  { path: 'admin', component: AdminComponent, children:[
      { path: 'overzicht', component: AdminOverviewComponent},
      { path: ':id/edit', component: EditModComponent},
      { path: 'settings', component: SettingsComponent},
      { path: 'search-admin', component: SearchAdminComponent},
      { path: 'nieuw', component: AddModComponent},
      { path: 'bulk', component: BulkUploadComponent }
    ], canActivate: [RoleGuardService], data: {expectedRole: 'ADMIN'},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
