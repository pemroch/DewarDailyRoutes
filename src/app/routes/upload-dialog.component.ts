// Angular
import { Component } from '@angular/core';
// Module Services
import { UploadRoutesService } from './services/upload-routes.service';

@Component({
    selector: 'app-upload-dialog',
    template: `
        <app-upload-form
            [pending]="this.uploadRoutesService.pending$ | async"
            [error]="this.uploadRoutesService.error$ | async"
            [rates]="this.uploadRoutesService.rates$ | async"
            [pickUpItems]="this.uploadRoutesService.pickUpItems$ | async"

            (fileInputClick)="this.uploadRoutesService.fileInputClick($event)"
            (uploadRoutes)="this.uploadRoutesService.uploadRoutes($event)"
        ></app-upload-form>
    `,
    providers: [UploadRoutesService]
})
export class UploadDialogComponent {
    constructor(public uploadRoutesService: UploadRoutesService) { }
}
