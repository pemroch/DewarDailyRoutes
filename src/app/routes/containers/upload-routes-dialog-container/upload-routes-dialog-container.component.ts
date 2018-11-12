// Angular
import { Component } from '@angular/core';
// Module Services
import { UploadRoutesDialogService } from '../../services/upload-routes-dialog.service';

@Component({
    selector: 'app-upload-routes-dialog-container',
    template: `
        <app-upload-routes-dialog
            [pending]="this.uploadRoutesDialogService.pending$ | async"
            [error]="this.uploadRoutesDialogService.error$ | async"
            [rates]="this.uploadRoutesDialogService.rates$ | async"

            (fileInputClick)="this.uploadRoutesDialogService.fileInputClick($event)"
            (uploadRoutes)="this.uploadRoutesDialogService.uploadRoutes($event)"
        ></app-upload-routes-dialog>
    `,
    providers: [UploadRoutesDialogService]
})
export class UploadRoutesDialogContainerComponent {
    constructor(public uploadRoutesDialogService: UploadRoutesDialogService) { }
}
