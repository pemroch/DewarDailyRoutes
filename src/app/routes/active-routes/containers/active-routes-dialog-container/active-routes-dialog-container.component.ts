// Angular
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
// Shared Modules
import { Route } from '@shared/models';
// Module Services
import { ActiveRoutesDialogService } from '../../services/active-routes-dialog.service';

@Component({
    selector: 'app-active-routes-dialog-container',
    template: `
        <app-active-routes-dialog
            [route]="this.route"
            [states]="this.activeRoutesDialogService.states"
            [stops]="this.activeRoutesDialogService.stops"
            [ratePerDrop]="this.activeRoutesDialogService.ratePerDrop"
            [drivers]="this.activeRoutesDialogService.drivers$ | async"
            [trucks]="this.activeRoutesDialogService.trucks$ | async"
            [trailers]="this.activeRoutesDialogService.trailers$ | async"
            [rates]="this.activeRoutesDialogService.rates$ | async"
            [locations]="this.activeRoutesDialogService.locations$ | async"
            [customers]="this.activeRoutesDialogService.customers$ | async"
            [pickUpItems]="this.activeRoutesDialogService.pickUpItems$ | async"
            [pending]="this.activeRoutesDialogService.pending$ | async"
            [error]="this.activeRoutesDialogService.error$ | async"
            [compareWith]="this.activeRoutesDialogService.compareWith"
            (add)="this.activeRoutesDialogService.add(this.route, $event)"
            (save)="this.activeRoutesDialogService.save(this.route, $event)"
            (clearDate)="this.activeRoutesDialogService.clearDate(this.route)"
            (setStops)="this.activeRoutesDialogService.setStops(this.route, $event)"
            (ratePerDropEdit)="this.activeRoutesDialogService.ratePerDropEdit(this.route, $event)"
            (checkBoxChanged)="this.activeRoutesDialogService.checkBoxChanged(this.route, $event)"
        ></app-active-routes-dialog>
    `,
    providers: [ActiveRoutesDialogService]
})
export class ActiveRoutesDialogContainerComponent {
    route: Route;

    constructor(
        @Inject(MAT_DIALOG_DATA) public routeRef: Route,
        public activeRoutesDialogService: ActiveRoutesDialogService
    ) {
        this.route = this.routeRef ? this.routeRef : {
            comments: [],
            confirmation: { email: null, date: null, confirmed: null },
            customers: [],
            destination: { city: null, state: null },
            driver: null,
            id: null,
            loadDate: null,
            loadLocation: null,
            miles: null,
            noOfStops: null,
            origin: { city: null, state: null },
            pickUpItems: [],
            rate: { id: null, ratePerMile: null, name: null },
            routeNumber: null,
            ratePerDrop: [],
            refNumber1: null,
            refNumber2: null,
            refNumber3: null,
            temp: null,
            trailer: null,
            truck: null
        };
        this.route.loadDate = this.route.loadDate ? new Date(this.route.loadDate) : null;
        this.activeRoutesDialogService.setStops(this.route, this.route.noOfStops || 0);
    }
}
