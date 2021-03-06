import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {SettingsComponent} from "./settings/settings.component";
import {SearchAdminComponent} from "./search-admin/search-admin.component";
import {AddModComponent} from "./new-mod/add-mod.component";
import {AdminOverviewComponent} from "./moderator-details/overview/admin-overview.component";
import {EditModComponent} from "./moderator-details/edit-mod/edit-mod.component";
import {AdminComponent} from "./admin.component";
import {ModDropdownComponent} from "./moderator-details/edit-mod/mod-dropdown/mod-dropdown.component";
import {AddModPopupComponent} from "./new-mod/add-mod-popup/add-mod-popup.component";
import {JsonParserLayoutRowComponent} from "./bulk-upload/json-parser/json-parser-layout/json-parser-layout-row/json-parser-layout-row.component";
import {JsonParserLayoutComponent} from "./bulk-upload/json-parser/json-parser-layout/json-parser-layout.component";
import {JsonParserLayoutDropdownComponent} from "./bulk-upload/json-parser/json-parser-layout/json-parser-layout-dropdown/json-parser-layout-dropdown.component";
import {JsonParserComponent} from "./bulk-upload/json-parser/json-parser.component";
import {BulkUploadComponent} from "./bulk-upload/bulk-upload.component";
import {BulkUploadLoadingPopupComponent} from "./bulk-upload/bulk-upload-loading-popup/bulk-upload-loading-popup.component";
import {CsvParserComponent} from "./bulk-upload/csv-parser/csv-parser.component";
import {AdminHeaderComponent} from "./admin-header/admin-header.component";
import {AdminSavePopupComponent} from "./moderator-details/edit-mod/admin-save-popup/admin-save-popup.component";
import {SearchModeratorComponent} from "./moderator-details/overview/search-moderator/search-moderator.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AfkoteekModule} from "../afkoteek/afkoteek.module";
import {FeatureModule} from "../features/feature.module";
import {UserComponent} from "./moderator-details/overview/user/user.component";



@NgModule({
  declarations: [
    SettingsComponent,
    SearchAdminComponent,
    AddModComponent,
    AdminOverviewComponent,
    EditModComponent,
    AdminComponent,
    ModDropdownComponent,
    AddModPopupComponent,
    JsonParserLayoutRowComponent,
    JsonParserLayoutComponent,
    JsonParserLayoutDropdownComponent,
    BulkUploadComponent,
    BulkUploadLoadingPopupComponent,
    CsvParserComponent,
    JsonParserComponent,
    AdminHeaderComponent,
    AdminSavePopupComponent,
    SearchModeratorComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AfkoteekModule,
    FeatureModule
  ]
})
export class AdminModule { }
