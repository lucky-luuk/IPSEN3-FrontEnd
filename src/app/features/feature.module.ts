import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DropdownComponent} from "./dropdown/dropdown.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoadingAnimationComponent} from "../afkoteek/search/abbreviation-list/loading-animation/loading-animation.component";
import {GenericPopupComponent} from "./generic-popup/generic-popup.component";


@NgModule({
  declarations: [
    DropdownComponent,
    LoadingAnimationComponent,
    GenericPopupComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DropdownComponent,
    LoadingAnimationComponent,
    GenericPopupComponent,

  ]
})
export class FeatureModule {
}
