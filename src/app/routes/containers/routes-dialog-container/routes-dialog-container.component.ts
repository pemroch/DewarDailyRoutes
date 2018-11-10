// Angular
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
// Module Services
import { RoutesDialiogService } from '../../services/routes-dialiog.service';

@Component({
    selector: 'app-routes-dialog-container',
    template: `
        <app-routes-dialog-loading *ngIf="!(this.routesDialiogService.route$ | async)"></app-routes-dialog-loading>
        <app-routes-dialog
            [states]="this.routesDialiogService.states"
            [ratePerDropAll]="this.routesDialiogService.ratePerDropAll"

            [pending]="this.routesDialiogService.pending$ | async"
            [error]="this.routesDialiogService.error$ | async"
            [route]="this.routesDialiogService.route$ | async"
            [drivers]="this.routesDialiogService.drivers$ | async"
            [trucks]="this.routesDialiogService.trucks$ | async"
            [trailers]="this.routesDialiogService.trailers$ | async"
            [rates]="this.routesDialiogService.rates$ | async"
            [locations]="this.routesDialiogService.locations$ | async"
            [customers]="this.routesDialiogService.customers$ | async"
            [pickUpItems]="this.routesDialiogService.pickUpItems$ | async"

            [trackByFn]="this.routesDialiogService.trackByFn"
            [compareWith]="this.routesDialiogService.compareWith"

            (add)="this.routesDialiogService.add($event)"
            (save)="this.routesDialiogService.save($event)"
            (clearDate)="this.routesDialiogService.clearDate($event)"
            (checkBoxChanged)="this.routesDialiogService.checkBoxChanged($event)"
            (setStops)="this.routesDialiogService.setStops($event)"
            (ratePerDropAllKeyup)="this.routesDialiogService.ratePerDropAllKeyup($event)"
            (ratePerDropEachKeyup)="this.routesDialiogService.ratePerDropEachKeyup($event)"
        ></app-routes-dialog>
    `,
    providers: [RoutesDialiogService]
})
export class RoutesDialogContainerComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public routeId: string,
        public routesDialiogService: RoutesDialiogService
    ) {
        this.routesDialiogService.routeId$.next(this.routeId);
    }
}
