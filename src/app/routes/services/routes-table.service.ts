// Angular
import { Injectable } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
// rxjs
import { BehaviorSubject } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
// Shared Services
import { NgFireService } from '@shared/services';
// Shared Models
import { Customer, Driver, Location, PickUpItem, Route, Truck, Trailer } from '@shared/models';
// Module Components
import {
    RoutesDialogContainerComponent
} from '../containers/routes-dialog-container/routes-dialog-container.component';

@Injectable()
export class RoutesTableService {

    /* Models **/

    displayedColumns = [
        'rate',
        'month',
        'routeNumber',
        'customers',
        'truck',
        'trailer',
        'driver',
        'driverEta',
        'temp',
        'origin',
        'destination',
        'miles',
        'ratePerMile',
        'noOfStops',
        'ratePerStop',
        'pickUpItems',
        'loadDate',
        'loadLocation',
        'confirmation',
        'refNumber1',
        'refNumber2',
        'refNumber3',
    ];
    dataSource = new MatTableDataSource<any>();

    driversObjRef$ = new BehaviorSubject<any>({});
    trucksObjRef$ = new BehaviorSubject<any>({});
    trailersObjRef$ = new BehaviorSubject<any>({});
    locationsObjRef$ = new BehaviorSubject<any>({});
    customersObjRef$ = new BehaviorSubject<any>({});
    pickUpItemsObjRef$ = new BehaviorSubject<any>({});

    dataSource$ = this.ngFireService.loadCollectionLimit('routes', 100, 'routeNumber', 'asc').pipe(
        map((routes: Route[]) => routes.map(route => Object.assign({}, route, {
            month: route.loadDate ? this.getMonday(route.loadDate) : null
        }))),
        delay(400),
        tap(routes => this.dataSource.data = routes)
    );

    drivers$ = this.ngFireService.loadCollection('drivers').pipe(
        delay(400),
        tap(drivers => this.driversObjRef$.next(
            drivers.reduce((prev: any, curr: any) => {
                prev.arr.push(curr.name.replace(/\W/g, ''));
                prev.byName[curr.name.replace(/\W/g, '')] = curr;
                prev.byId[curr.id] = curr;
                return prev;
            }, { arr: [], byName: {}, byId: {} })
        )),
        map(drivers => drivers.map((driver: Driver) => Object.assign({}, {[driver.id]: driver }))),
        map(drivers => Object.assign({}, ...drivers))
    );

    trucks$ = this.ngFireService.loadCollection('trucks').pipe(
        delay(400),
        tap(trucks => this.trucksObjRef$.next(
            trucks.reduce((prev: any, curr: any) => {
                prev.arr.push(curr.name.replace(/\W/g, ''));
                prev.byName[curr.name.replace(/\W/g, '')] = curr;
                prev.byId[curr.id] = curr;
                return prev;
            }, { arr: [], byName: {}, byId: {} })
        )),
        map(trucks => trucks.map((truck: Truck) => Object.assign({}, {[truck.id]: truck }))),
        map(trucks => Object.assign({}, ...trucks))
    );

    trailers$ = this.ngFireService.loadCollection('trailers').pipe(
        delay(400),
        tap(trailers => this.trailersObjRef$.next(
            trailers.reduce((prev: any, curr: any) => {
                prev.arr.push(curr.name.replace(/\W/g, ''));
                prev.byName[curr.name.replace(/\W/g, '')] = curr;
                prev.byId[curr.id] = curr;
                return prev;
            }, { arr: [], byName: {}, byId: {} })
        )),
        map(trailers => trailers.map((trailer: Trailer) => Object.assign({}, {[trailer.id]: trailer }))),
        map(trailers => Object.assign({}, ...trailers))
    );

    locations$ = this.ngFireService.loadCollection('locations').pipe(
        delay(400),
        tap(locations => this.locationsObjRef$.next(
            locations.reduce((prev: any, curr: any) => {
                prev.arr.push(curr.name.replace(/\W/g, ''));
                prev.byName[curr.name.replace(/\W/g, '')] = curr;
                prev.byId[curr.id] = curr;
                return prev;
            }, { arr: [], byName: {}, byId: {} })
        )),
        map(locations => locations.map((location: Location) => Object.assign({}, {[location.id]: location }))),
        map(locations => Object.assign({}, ...locations))
    );

    customers$ = this.ngFireService.loadCollection('customers').pipe(
        delay(400),
        tap(customers => this.customersObjRef$.next(
            customers.reduce((prev: any, curr: any) => {
                prev.arr.push(curr.name.replace(/\W/g, ''));
                prev.byName[curr.name.replace(/\W/g, '')] = curr;
                prev.byId[curr.id] = curr;
                return prev;
            }, { arr: [], byName: {}, byId: {} })
        )),
        map(customers => customers.map((customer: Customer) => Object.assign({}, {[customer.id]: customer }))),
        map(customers => Object.assign({}, ...customers))
    );

    pickUpItems$ = this.ngFireService.loadCollection('pickUpItems').pipe(
        delay(400),
        tap(pickUpItems => this.pickUpItemsObjRef$.next(
            pickUpItems.reduce((prev: any, curr: any) => {
                prev.arr.push(curr.name.replace(/\W/g, ''));
                prev.byName[curr.name.replace(/\W/g, '')] = curr;
                prev.byId[curr.id] = curr;
                return prev;
            }, { arr: [], byName: {}, byId: {} })
        )),
        map(pickUpItems => pickUpItems.map((pickUpItem: PickUpItem) => Object.assign({}, {[pickUpItem.id]: pickUpItem }))),
        map(pickUpItems => Object.assign({}, ...pickUpItems))
    );

    /* Service Functions **/

    editRoute(route) {
        this.matDialog.open(RoutesDialogContainerComponent, { data: route.id, width: '75%', height: '90%' });
    }

    /* Helper Functions **/

    getMonday(d) {
        d = new Date(d);
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(d.setDate(diff)).getMonth() + 1;
    }

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService
    ) { }
}
