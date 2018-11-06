// Angular
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
// Module Services
import { TrailerSettingsDialogService } from '../../services/trailer-settings-dialog.service';

@Component({
    selector: 'app-trailer-settings-dialog-container',
    template: `
        <app-trailer-settings-dialog
            [trailer]="this.trailer"
            [pending]="this.trailerSettingsDialogService.pending$ | async"
            [error]="this.trailerSettingsDialogService.error$ | async"
            (add)="this.trailerSettingsDialogService.add(trailer)"
            (save)="this.trailerSettingsDialogService.save(trailer)"
        ></app-trailer-settings-dialog>
    `,
    providers: [TrailerSettingsDialogService]
})
export class TrailerSettingsDialogContainerComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public trailer: any,
        public trailerSettingsDialogService: TrailerSettingsDialogService
    ) { }
}
