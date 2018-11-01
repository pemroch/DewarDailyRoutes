// Angular
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
// Module Services
import { DriverDialogService } from '../../services/driver-dialog.service';

@Component({
    selector: 'app-driver-dialog-container',
    template: `
        <app-driver-dialog
            [driver]="this.driver"
            [pending]="this.driverDialogService.pending$ | async"
            [error]="this.driverDialogService.error$ | async"
            (add)="this.driverDialogService.add(driver)"
            (save)="this.driverDialogService.save(driver)"
        ></app-driver-dialog>
    `
})
export class DriverDialogContainerComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public driver: any,
        public driverDialogService: DriverDialogService
    ) { }
}
