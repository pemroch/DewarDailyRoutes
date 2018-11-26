// Angular
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
// Module Services
import { TruckSettingsDialogService } from '../../services/truck-settings-dialog.service';

@Component({
    selector: 'app-truck-settings-dialog-container',
    template: `
        <app-truck-settings-dialog
            [truck]="this.truck"
            [pending]="this.truckSettingsDialogService.pending$ | async"
            [error]="this.truckSettingsDialogService.error$ | async"
            (add)="this.truckSettingsDialogService.add(truck)"
            (save)="this.truckSettingsDialogService.save(truck)"
        ></app-truck-settings-dialog>
    `,
    providers: [TruckSettingsDialogService]
})
export class TruckSettingsDialogContainerComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public truck: any,
        public truckSettingsDialogService: TruckSettingsDialogService
    ) { }
}
