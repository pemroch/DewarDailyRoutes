// Angular
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
// Module Services
import { PickUpItemSettingsDialogService } from '../../services/pick-up-item-settings-dialog.service';

@Component({
    selector: 'app-pick-up-item-settings-dialog-container',
    template: `
        <app-pick-up-item-settings-dialog
            [pickUpItem]="this.pickUpItem"
            [pending]="this.pickUpItemSettingsDialogService.pending$ | async"
            [error]="this.pickUpItemSettingsDialogService.error$ | async"
            (add)="this.pickUpItemSettingsDialogService.add(pickUpItem)"
            (save)="this.pickUpItemSettingsDialogService.save(pickUpItem)"
        ></app-pick-up-item-settings-dialog>
    `,
    providers: [PickUpItemSettingsDialogService]
})
export class PickUpItemSettingsDialogContainerComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public pickUpItem: any,
        public pickUpItemSettingsDialogService: PickUpItemSettingsDialogService
    ) { }
}
