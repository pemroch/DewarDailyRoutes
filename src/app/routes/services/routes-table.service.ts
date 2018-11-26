import { Injectable } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';

import { BehaviorSubject } from 'rxjs';
import { map, switchMap, takeWhile, tap } from 'rxjs/operators';

import { NgFireService } from '@shared/services';
import { Customer, Driver, Location, PickUpItem, Route, Truck, Trailer } from '@shared/models';

import { SharedRoutesService } from './shared-routes.service';
import { AddEditDialogComponent } from '../add-edit-dialog.component';

@Injectable()
export class RoutesTableService {
    displayedColumns = [
        'rate',
        'month',
        'routeNumber',
        'loadDate',
        'loadLocation',
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

    dataSource$ = this.sharedRoutesService.hasSearch$.pipe(
        switchMap(_ => this.ngFireService.loadCollectionLimit('routes', 100, 'routeNumber', 'asc').pipe(
            takeWhile(() => !this.sharedRoutesService.hasSearch$.getValue()),
            map((routes: Route[]) => routes.map(route => Object.assign({}, route, {
                month: route.loadDate ? this.getMonday(route.loadDate) : null
            }))),
            tap(routes => this.dataSource.data = routes),
            tap(routes => this.sharedRoutesService.title$.next('Last ' + routes.length + ' Routes' ))
        ))
    );

    drivers$ = this.ngFireService.loadCollection('drivers').pipe(
        tap(drivers => this.driversObjRef$.next(drivers.reduce((prev: any, curr: any) => (prev[curr.id] = curr, prev ), {}))),
        map(drivers => drivers.map((driver: Driver) => Object.assign({}, {[driver.id]: driver }))),
        map(drivers => Object.assign({}, ...drivers))
    );

    trucks$ = this.ngFireService.loadCollection('trucks').pipe(
        tap(trucks => this.trucksObjRef$.next(trucks.reduce((prev: any, curr: any) => (prev[curr.id] = curr, prev), {}))),
        map(trucks => trucks.map((truck: Truck) => Object.assign({}, {[truck.id]: truck }))),
        map(trucks => Object.assign({}, ...trucks))
    );

    trailers$ = this.ngFireService.loadCollection('trailers').pipe(
        tap(trailers => this.trailersObjRef$.next(trailers.reduce((prev: any, curr: any) => (prev[curr.id] = curr, prev), {}))),
        map(trailers => trailers.map((trailer: Trailer) => Object.assign({}, {[trailer.id]: trailer }))),
        map(trailers => Object.assign({}, ...trailers))
    );

    locations$ = this.ngFireService.loadCollection('locations').pipe(
        tap(locations => this.locationsObjRef$.next(locations.reduce((prev: any, curr: any) => (prev[curr.id] = curr, prev), {}))),
        map(locations => locations.map((location: Location) => Object.assign({}, {[location.id]: location }))),
        map(locations => Object.assign({}, ...locations))
    );

    customers$ = this.ngFireService.loadCollection('customers').pipe(
        map(customers => customers.map((customer: Customer) => Object.assign({}, {[customer.id]: customer }))),
        map(customers => Object.assign({}, ...customers))
    );

    pickUpItems$ = this.ngFireService.loadCollection('pickUpItems').pipe(
        map(pickUpItems => pickUpItems.map((pickUpItem: PickUpItem) => Object.assign({}, {[pickUpItem.id]: pickUpItem }))),
        map(pickUpItems => Object.assign({}, ...pickUpItems))
    );

    editRoute(route) {
        this.matDialog.open(AddEditDialogComponent, { data: route.id, width: '75%', height: '90%' });
    }

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService,
        private sharedRoutesService: SharedRoutesService
    ) { }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.toLowerCase().trim();

        this.dataSource.filterPredicate = (data: any[], filter: string): boolean => {
            let string = '';

            for (const prop in data) {
                if (data[prop]) {
                    if (Array.isArray(data[prop]) && data[prop].length) {
                        data[prop].forEach(value => string += value.name);
                    } else if (data[prop].constructor === Object) {
                        for (const p in data[prop]) {
                            if (data[prop][p]) {
                                string += data[prop][p].toString().toLowerCase().trim();
                            }
                        }
                    } else if (prop === 'loadDate') {
                        const month = ('0' + (new Date(data[prop]).getMonth() + 1)).slice(-2);
                        const day = ('0' + new Date(data[prop]).getDate()).slice(-2);
                        const year = ('0' + new Date(data[prop]).getFullYear()).slice(-2);
                        string += month + '/' + day + '/' + year;
                    } else {
                        string += (data[prop].constructor === Object) ? data[prop].name : data[prop].toString().toLowerCase().trim();
                    }
                }
            }

            return string.includes(filter) ? true : false;
        };
    }

    getMonday(d) {
        d = new Date(d);
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(d.setDate(diff)).getMonth() + 1;
    }
}
