import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { firestore, auth } from 'firebase/app';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { delay, map, switchMap, tap } from 'rxjs/operators';

import { NgFireService } from '@shared/services';
import { Route } from '@shared/models';

@Injectable()
export class AddEditService {
    states = [
        { name: 'Alabama', abbrev: 'AL' },
        { name: 'Alaska', abbrev: 'AK' },
        { name: 'Arizona', abbrev: 'AZ' },
        { name: 'Arkansas', abbrev: 'AR' },
        { name: 'California', abbrev: 'CA' },
        { name: 'Colorado', abbrev: 'CO' },
        { name: 'Connecticut', abbrev: 'CT' },
        { name: 'Delaware', abbrev: 'DE' },
        { name: 'Florida', abbrev: 'FL' },
        { name: 'Georgia', abbrev: 'GA' },
        { name: 'Hawaii', abbrev: 'HI' },
        { name: 'Idaho', abbrev: 'ID' },
        { name: 'Illinois', abbrev: 'IL' },
        { name: 'Indiana', abbrev: 'IN' },
        { name: 'Iowa', abbrev: 'IA' },
        { name: 'Kansas', abbrev: 'KS' },
        { name: 'Kentucky', abbrev: 'KY' },
        { name: 'Louisiana', abbrev: 'LA' },
        { name: 'Maine', abbrev: 'ME' },
        { name: 'Maryland', abbrev: 'MD' },
        { name: 'Massachusetts', abbrev: 'MA' },
        { name: 'Michigan', abbrev: 'MI' },
        { name: 'Minnesota', abbrev: 'MN' },
        { name: 'Mississippi', abbrev: 'MS' },
        { name: 'Missouri', abbrev: 'MO' },
        { name: 'Montana', abbrev: 'MT' },
        { name: 'Nebraska', abbrev: 'NE' },
        { name: 'Nevada', abbrev: 'NV' },
        { name: 'New Hampshire', abbrev: 'NH' },
        { name: 'New Jersey', abbrev: 'NJ' },
        { name: 'New Mexico', abbrev: 'NM' },
        { name: 'New York', abbrev: 'NY' },
        { name: 'North Carolina', abbrev: 'NC' },
        { name: 'North Dakota', abbrev: 'ND' },
        { name: 'Ohio', abbrev: 'OH' },
        { name: 'Oklahoma', abbrev: 'OK' },
        { name: 'Oregon', abbrev: 'OR' },
        { name: 'Pennsylvania', abbrev: 'PA' },
        { name: 'Rhode Island', abbrev: 'RI' },
        { name: 'South Carolina', abbrev: 'SC' },
        { name: 'South Dakota', abbrev: 'SD' },
        { name: 'Tennessee', abbrev: 'TN' },
        { name: 'Texas', abbrev: 'TX' },
        { name: 'Utah', abbrev: 'UT' },
        { name: 'Vermont', abbrev: 'VT' },
        { name: 'Virginia', abbrev: 'VA' },
        { name: 'Washington', abbrev: 'WA' },
        { name: 'West Virginia', abbrev: 'WV' },
        { name: 'Wisconsin', abbrev: 'WI' },
        { name: 'Wyoming', abbrev: 'WY' }
    ];

    routeId$ = new BehaviorSubject<string>(null);
    error$ = new Subject<string>();
    pending$ = new Subject<boolean>();
    route$ = this.routeId$.pipe(
        switchMap(routeId => {
            return routeId
            ? this.ngFireService.loadDocument('routes', routeId)
            : of(<Route>{
                comments: [],
                confirmation: { email: null, date: null, confirmed: null },
                customers: [],
                destination: { city: null, state: null },
                driver: null,
                driverEta: null,
                id: null,
                loadDate: null,
                loadLocation: null,
                miles: null,
                noOfStops: null,
                origin: { city: null, state: null },
                pickUpItems: [],
                rate: { id: null, name: null, ratePerMile: null, ratePerStop: null },
                ratePerStopEach: [],
                refNumber1: null,
                refNumber2: null,
                refNumber3: null,
                routeNumber: null,
                temp: null,
                trailer: null,
                truck: null
            });
        }),
        map((route: Route) => Object.assign({}, route, { loadDate: route.loadDate ? new Date(route.loadDate) : null })),
        map((route: Route) => Object.assign({}, route, { driverEta: route.driverEta ? new Date(route.driverEta) : null })),
        tap((route: Route) => this.setStops(route)),
        delay(400),
    );
    drivers$ = this.ngFireService.load1Condition('drivers', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    trucks$ = this.ngFireService.load1Condition('trucks', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    trailers$ = this.ngFireService.load1Condition('trailers', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    rates$ = this.ngFireService.load1Condition('rates', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    locations$ = this.ngFireService.load1Condition('locations', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    customers$ = this.ngFireService.load1Condition('customers', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    pickUpItems$ = this.ngFireService.load1Condition('pickUpItems', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService
    ) { }

    add($event: { route: Route, comment: string }) {
        this.pending$.next(true);

        const route = Object.assign({}, $event.route, <Route>{
            comments: $event.comment
                ? [{ email: auth().currentUser.email, text: $event.comment, date: new Date().getTime() }]
                : $event.route.comments,
            confirmation: {
                email: $event.route.confirmation.confirmed ? auth().currentUser.email : null,
                date: $event.route.confirmation.confirmed ? new Date().getTime() : null,
                confirmed: $event.route.confirmation.confirmed ? true : null
            },
            customers: $event.route.customers.map(customer => ({ id: customer.id, name: customer.name })),
            destination: {
                city: $event.route.destination.city ? $event.route.destination.city : null,
                state: $event.route.destination.state ? $event.route.destination.state : null
            },
            driver: $event.route.driver || { id: null, name: null },
            driverEta: $event.route.driverEta ? new Date($event.route.driverEta).getTime() : null,
            loadDate: $event.route.loadDate ? new Date($event.route.loadDate).getTime() : null,
            loadLocation: $event.route.loadLocation || { id: null, name: null },
            origin: {
                city: $event.route.origin.city ? $event.route.origin.city : null,
                state: $event.route.origin.state ? $event.route.origin.state : null
            },
            pickUpItems: $event.route.pickUpItems.map(pickUpItem => ({
                id: pickUpItem.id, name: pickUpItem.name, ratePerItem: pickUpItem.ratePerItem
            })),
            rate: $event.route.rate || { id: null, name: null, ratePerMile: null, ratePerStop: null },
            refNumber1: $event.route.refNumber1 || null,
            refNumber2: $event.route.refNumber2 || null,
            refNumber3: $event.route.refNumber3 || null,
            trailer: $event.route.trailer || { id: null, name: null },
            truck: $event.route.truck || { id: null, name: null }
        });

        firestore().runTransaction(async transaction => {
            const ref = firestore().collection('routeNumber').doc('route');
            return transaction.get(ref)
            .then(routeRef => {
                const current = routeRef.data().number + 1;
                transaction.update(ref, { number: current });
                return current;
            });
        })
        .then(current => {
            route.routeNumber = current;
            this.ngFireService.add('routes', route)
            .then(_ => this.matDialog.closeAll())
            .catch(error => {
                this.pending$.next(false);
                this.error$.next(error.message);
            });
        })
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error.message);
        });
    }

    save($event: { route: Route, comment: string }) {
        this.pending$.next(true);

        const route = Object.assign({}, $event.route, <Route>{
            comments: $event.comment
                ? [{ email: auth().currentUser.email, text: $event.comment, date: new Date().getTime() }]
                : $event.route.comments,
            confirmation: {
                email: $event.route.confirmation.confirmed ? auth().currentUser.email : null,
                date: $event.route.confirmation.confirmed ? new Date().getTime() : null,
                confirmed: $event.route.confirmation.confirmed ? true : null
            },
            customers: $event.route.customers.map(customer => ({ id: customer.id, name: customer.name })),
            destination: {
                city: $event.route.destination.city ? $event.route.destination.city : null,
                state: $event.route.destination.state ? $event.route.destination.state : null
            },
            driver: $event.route.driver || { id: null, name: null },
            driverEta: $event.route.driverEta ? new Date($event.route.driverEta).getTime() : null,
            loadDate: $event.route.loadDate ? new Date($event.route.loadDate).getTime() : null,
            loadLocation: $event.route.loadLocation || { id: null, name: null },
            origin: {
                city: $event.route.origin.city ? $event.route.origin.city : null,
                state: $event.route.origin.state ? $event.route.origin.state : null
            },
            pickUpItems: $event.route.pickUpItems.map(pickUpItem => ({
                id: pickUpItem.id, name: pickUpItem.name, ratePerItem: pickUpItem.ratePerItem
            })),
            rate: $event.route.rate || { id: null, ratePerMile: null, name: null },
            refNumber1: $event.route.refNumber1 || null,
            refNumber2: $event.route.refNumber2 || null,
            refNumber3: $event.route.refNumber3 || null,
            trailer: $event.route.trailer || { id: null, name: null },
            truck: $event.route.truck || { id: null, name: null }
        });

        this.ngFireService.update('routes', $event.route.id, route)
        .then(_ => this.matDialog.closeAll())
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error.message);
        });
    }

    compareWith = (o1: any, o2: any): boolean => {
        if (o1.id && o2.id) {
            return o1.id === o2.id;
        }
    }

    trackByFn(index: number): number {
        return index;
     }

    isSelected($event: { arr: any[], item: any }) {
        return $event.arr.map(e => e.id).indexOf($event.item.id) >= 0 ? true : false;
    }

    pickUpItemRate($event: { arr: any[], item: any }) {
        const index = $event.arr.map(e => e.id).indexOf($event.item.id);
        if (index >= 0) {
            return $event.arr[index].ratePerItem;
        } else {
            return $event.item.ratePerItem;
        }
    }

    pickUpItemRateChange($event: { arr: any[], item: any, value: number }) {
        const index = $event.arr.map(e => e.id).indexOf($event.item.id);
        if (index >= 0) {
            $event.arr[index].ratePerItem = Number($event.value);
        }
    }

    clearDate($event: { route: Route, prop: string }) {
        $event.route[$event.prop] = null;
    }

    checkBoxChanged($event: { array: any[], value: any }) {
        const index = $event.array.map(e => e.id).indexOf($event.value.id);
        if (index === -1) {
            $event.array.push($event.value);
        } else {
            $event.array.splice(index, 1);
        }
    }

    setStops(route: Route) {
        const stops = [];
        if (route.noOfStops !== null && route.noOfStops < 100) {
            for (let i = 0; i < route.noOfStops; i++) {
                stops.push(route.ratePerStopEach[i] || route.rate.ratePerStop || null);
            }
            route.ratePerStopEach = stops;
        }
    }

    ratePerStopKeyup(route: Route) {
        route.ratePerStopEach = route.ratePerStopEach.map(_ => route.rate.ratePerStop ? Number(route.rate.ratePerStop) : null);
    }

    ratePerStopEachKeyup($event: { route: Route, index: number }) {
        $event.route.ratePerStopEach[$event.index] = $event.route.ratePerStopEach[$event.index]
            ? Number($event.route.ratePerStopEach[$event.index])
            : null;
    }
}
