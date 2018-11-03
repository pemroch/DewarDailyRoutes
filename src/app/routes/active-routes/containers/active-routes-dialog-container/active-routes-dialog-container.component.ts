// Angular
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
// Module Services
import { ActiveRoutesDialogService } from '../../services/active-routes-dialog.service';

@Component({
    selector: 'app-active-routes-dialog-container',
    template: `
        <app-active-routes-dialog
            [route]="this.route"
            [rates]="this.activeRoutesDialogService.rates$ | async"
            [trucks]="this.activeRoutesDialogService.trucks$ | async"
            [trailers]="this.activeRoutesDialogService.trailers$ | async"
            [drivers]="this.activeRoutesDialogService.drivers$ | async"
            [pickUps]="this.activeRoutesDialogService.pickUps$ | async"
            [states]="this.activeRoutesDialogService.states"
            [pending]="this.activeRoutesDialogService.pending$ | async"
            [error]="this.activeRoutesDialogService.error$ | async"
            (add)="this.activeRoutesDialogService.add(route, $event)"
            (save)="this.activeRoutesDialogService.save(route, $event)"
            (clearDate)="this.activeRoutesDialogService.clearDate(route)"
        ></app-active-routes-dialog>
    `,
    providers: [ActiveRoutesDialogService]
})
export class ActiveRoutesDialogContainerComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public route: any,
        public activeRoutesDialogService: ActiveRoutesDialogService
    ) { }
}
