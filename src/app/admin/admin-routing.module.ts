import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {EditModComponent} from "./edit-mod/edit-mod.component";
import {SettingsComponent} from "./settings/settings.component";
import {SearchAdminComponent} from "./search-admin/search-admin.component";
import {AddModComponent} from "./add-mod/add-mod.component";
import {BulkUploadComponent} from "./bulk-upload/bulk-upload.component";
import {RoleGuardService} from "../auth/role-guard.service";

const routes: Routes = [
  { path: 'admin', component: AdminComponent, children:[
      { path: 'overzicht', component: AdminPageComponent},
      { path: ':id/edit', component: EditModComponent},
      { path: 'settings', component: SettingsComponent},
      { path: 'search-admin', component: SearchAdminComponent},
      { path: 'nieuw', component: AddModComponent},
      { path: "bulk", component: BulkUploadComponent }
    ], canActivate: [RoleGuardService], data: {expectedRole: 'ADMIN'},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
