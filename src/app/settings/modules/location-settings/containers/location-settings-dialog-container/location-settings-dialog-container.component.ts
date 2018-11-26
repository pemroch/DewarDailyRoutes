// Angular
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
// Module Services
import { LocationSettingsDialogService } from '../../services/location-settings-dialog.service';

@Component({
    selector: 'app-location-settings-dialog-container',
    template: `
        <app-location-settings-dialog
            [location]="this.location"
            [pending]="this.locationSettingsDialogService.pending$ | async"
            [error]="this.locationSettingsDialogService.error$ | async"
            (add)="this.locationSettingsDialogService.add(location)"
            (save)="this.locationSettingsDialogService.save(location)"
        ></app-location-settings-dialog>
    `,
    providers: [LocationSettingsDialogService]
})
export class LocationSettingsDialogContainerComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public location: any,
        public locationSettingsDialogService: LocationSettingsDialogService
    ) { }
}
