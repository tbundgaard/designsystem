import { Injectable, ViewContainerRef } from '@angular/core';
import { ModalDialogService } from 'nativescript-angular/directives/dialogs';
import { ExtendedShowModalOptions } from 'nativescript-windowed-modal/windowed-modal.common';

import { ActionSheetConfig } from '../config/action-sheet-config';
import { ActionSheetComponent } from '../action-sheet.component';

@Injectable()
export class ActionSheetHelper {
  constructor(private modalDialogService: ModalDialogService) {}

  public async showActionSheet(config: ActionSheetConfig, vcRef: ViewContainerRef): Promise<any> {
    return await this.modalDialogService.showModal(ActionSheetComponent, {
      viewContainerRef: vcRef,
      closeCallback: null,
      context: config,
    } as ExtendedShowModalOptions);
  }
}