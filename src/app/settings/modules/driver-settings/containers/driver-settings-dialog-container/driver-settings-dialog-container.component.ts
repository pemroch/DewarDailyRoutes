// Angular
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
// Module Services
import { DriverSettingsDialogService } from '../../services/driver-settings-dialog.service';

@Component({
    selector: 'app-driver-settings-dialog-container',
    template: `
        <app-driver-settings-dialog
            [driver]="this.driver"
            [pending]="this.driverSettingsDialogService.pending$ | async"
            [error]="this.driverSettingsDialogService.error$ | async"
            (add)="this.driverSettingsDialogService.add(driver)"
            (save)="this.driverSettingsDialogService.save(driver)"
        ></app-driver-settings-dialog>
    `,
    providers: [DriverSettingsDialogService]
})
export class DriverSettingsDialogContainerComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public driver: any,
        public driverSettingsDialogService: DriverSettingsDialogService
    ) { }
}
