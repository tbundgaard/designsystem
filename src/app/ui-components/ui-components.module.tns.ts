import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ROUTES, COMPONENT_DECLARATIONS } from './ui-components.common';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(ROUTES)
  ],
  declarations: [
    COMPONENT_DECLARATIONS
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UiComponentsModule { }