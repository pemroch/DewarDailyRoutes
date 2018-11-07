// Angular
import { Injectable } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
// rxjs
import { delay, map, switchMap, tap } from 'rxjs/operators';
// Shared Services
import { NgFireService } from '@shared/services';
// Shared Models
import { Customer, Driver, Location, PickUpItem, Route, Truck, Trailer } from '@shared/models';
// Module Components
import {
    ActiveRoutesDialogContainerComponent
} from '../containers/active-routes-dialog-container/active-routes-dialog-container.component';

@Injectable()
export class ActiveRoutesService {
    displayedColumns = [
        'rate',
        'refNumber1',
        'refNumber2',
        'refNumber3',
        'customers',
        'truck',
        'trailer',
        'driver',
        'temp',
        'origin',
        'destination',
        'miles',
        'noOfStops',
        'pickUpItems',
        'loadDate',
        'confirmation'
    ];
    dataSource = new MatTableDataSource<any>();
    dataSource$ = this.ngFireService.loadCollection('routes', 'routeNumber', 'asc').pipe(
        delay(400),
        tap(routes => this.dataSource.data = routes),
    );

    drivers$ = this.ngFireService.loadCollection('drivers').pipe(
        delay(400),
        map(drivers => drivers.map((driver: Driver) => Object.assign({}, {[driver.id]: driver }))),
        map(drivers => Object.assign({}, ...drivers))
    );
    trucks$ = this.ngFireService.loadCollection('trucks').pipe(
        delay(400),
        map(trucks => trucks.map((truck: Truck) => Object.assign({}, {[truck.id]: truck }))),
        map(drivers => Object.assign({}, ...drivers))
    );
    trailers$ = this.ngFireService.loadCollection('trailers').pipe(
        delay(400),
        map(trailers => trailers.map((trailer: Trailer) => Object.assign({}, {[trailer.id]: trailer }))),
        map(drivers => Object.assign({}, ...drivers))
    );
    locations$ = this.ngFireService.loadCollection('locations').pipe(
        delay(400),
        map(locations => locations.map((location: Location) => Object.assign({}, {[location.id]: location }))),
        map(drivers => Object.assign({}, ...drivers))
    );
    customers$ = this.ngFireService.loadCollection('customers').pipe(
        delay(400),
        map(customers => customers.map((customer: Customer) => Object.assign({}, {[customer.id]: customer }))),
        map(drivers => Object.assign({}, ...drivers))
    );
    pickUpItems$ = this.ngFireService.loadCollection('pickUpItems').pipe(
        delay(400),
        map(pickUpItems => pickUpItems.map((pickUpItem: PickUpItem) => Object.assign({}, {[pickUpItem.id]: pickUpItem }))),
        map(drivers => Object.assign({}, ...drivers))
    );

    addRoute() {
        this.matDialog.open(ActiveRoutesDialogContainerComponent, { data: null, width: '90%', height: '90%' });
    }

    editRoute(route) {
        const target = {};
        for (const prop in route) {
            if (route.hasOwnProperty(prop)) {
                target[prop] = route[prop];
            }
        }
        this.matDialog.open(ActiveRoutesDialogContainerComponent, { data: target, width: '90%', height: '90%' });
    }

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService
    ) { }
}
