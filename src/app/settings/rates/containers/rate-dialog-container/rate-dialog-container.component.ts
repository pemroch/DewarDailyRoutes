// Angular
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
// Module Services
import { RateDialogService } from '../../services/rate-dialog.service';

@Component({
    selector: 'app-rate-dialog-container',
    template: `
        <app-rate-dialog
            [rate]="this.rate"
            [pending]="this.rateDialogService.pending$ | async"
            [error]="this.rateDialogService.error$ | async"
            (add)="this.rateDialogService.add(rate)"
            (save)="this.rateDialogService.save(rate)"
        ></app-rate-dialog>
    `
})
export class RateDialogContainerComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public rate: any,
        public rateDialogService: RateDialogService
    ) { }
}
