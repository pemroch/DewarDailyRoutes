// Angular
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
// Module Services
import { RateSettingsDialogService } from '../../services/rate-settings-dialog.service';

@Component({
    selector: 'app-rate-settings-dialog-container',
    template: `
        <app-rate-settings-dialog
            [rate]="this.rate"
            [pending]="this.rateSettingsDialogService.pending$ | async"
            [error]="this.rateSettingsDialogService.error$ | async"
            (add)="this.rateSettingsDialogService.add(rate)"
            (save)="this.rateSettingsDialogService.save(rate)"
        ></app-rate-settings-dialog>
    `
})
export class RateSettingsDialogContainerComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public rate: any,
        public rateSettingsDialogService: RateSettingsDialogService
    ) { }
}
