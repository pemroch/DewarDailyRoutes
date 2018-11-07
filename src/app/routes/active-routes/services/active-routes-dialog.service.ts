// Angular
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
// firebase
import { firestore, auth } from 'firebase/app';
// rxjs
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
// Shared Services
import { NgFireService } from '@shared/services';
// Shared Models
import { Comment, Route } from '@shared/models';

@Injectable()
export class ActiveRoutesDialogService {
    error$ = new Subject<string>();
    pending$ = new Subject<boolean>();
    drivers$ = this.ngFireService.load1Condition('drivers', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    trucks$ = this.ngFireService.load1Condition('trucks', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    trailers$ = this.ngFireService.load1Condition('trailers', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    rates$ = this.ngFireService.load1Condition('rates', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    locations$ = this.ngFireService.load1Condition('locations', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    customers$ = this.ngFireService.load1Condition('customers', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    pickUpItems$ = this.ngFireService.load1Condition('pickUpItems', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
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
    stops = [];
    ratePerDrop = null;

    getMonday(d) {
        d = new Date(d);
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(d.setDate(diff)).getMonth() + 1;
    }

    add(route: Route, comment: Comment) {
        this.pending$.next(true);

        const newRoute = Object.assign({}, route, {
            comments: comment ? [{ email: auth().currentUser.email, text: comment, date: new Date().getTime() }] : route.comments,
            confirmation: {
                email: route.confirmation.confirmed ? auth().currentUser.email : null,
                date: route.confirmation.confirmed ? new Date().getTime() : null,
                confirmed: route.confirmation.confirmed ? true : null
            },
            loadDate: route.loadDate ? new Date(route.loadDate).getTime() : null
        });

        firestore().runTransaction(transaction => {
            const ref = firestore().collection('routeNumber').doc('route');
            return transaction.get(ref)
            .then(routeRef => {
                const routeNumber = routeRef.data().number + 1;
                transaction.update(ref, { number: routeNumber });
                return routeNumber;
            });
        })
        .then(routeNumber => {
            newRoute.routeNumber = routeNumber;
            this.ngFireService.add('routes', newRoute)
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

    save(route: Route, comment: Comment) {
        // this.pending$.next(true);

        const newRoute = Object.assign({}, route, {
            comments: comment ? [{ email: auth().currentUser.email, text: comment, date: new Date().getTime() }] : route.comments,
            confirmation: {
                email: route.confirmation.confirmed ? auth().currentUser.email : null,
                date: route.confirmation.confirmed ? new Date().getTime() : null,
                confirmed: route.confirmation.confirmed ? true : null
            },
            loadDate: route.loadDate ? new Date(route.loadDate).getTime() : null
        });

        console.log(newRoute);

        // const routeObj: Route = {
        //     id: null,
        //     customers: route.customers || {},
        //     routeNumber: route.routeNumber,
        //     rate: {
        //         id: route.rate.id || null,
        //         isActive: route.rate.isActive || null,
        //         ratePerMile: route.rate.ratePerMile || null,
        //         name: route.rate.name || null
        //     },
        //     ratePerDrop: route.ratePerDrop,
        //     truck: route.truck || {
        //         id: null,
        //         isActive: null,
        //         name: null
        //     },
        //     trailer: route.trailer || {
        //         id: null,
        //         isActive: null,
        //         name: null
        //     },
        //     driver: route.driver || {
        //         id: null,
        //         isActive: null,
        //         name: null
        //     },
        //     temp: route.temp || null,
        //     loadLocation: route.loadLocation || {
        //         id: null,
        //         isActive: null,
        //         name: null
        //     },
        //     loadDate: route.loadDate ? new Date(route.loadDate).getTime() : null,
        //     origin: {
        //         city: route.origin.city ? route.origin.city.toLowerCase().trim() : null,
        //         state: route.origin.state ? route.origin.state : null
        //     },
        //     destination: {
        //         city: route.destination.city ? route.destination.city.toLowerCase().trim() : null,
        //         state: route.destination.state ? route.destination.state : null
        //     },
        //     miles: route.miles || null,
        //     noOfStops: route.noOfStops || null,
        //     pickUpItems: route.pickUpItems || {},
        //     refNumber1: route.refNumber1 || null,
        //     refNumber2: route.refNumber2 || null,
        //     refNumber3: route.refNumber3 || null,
        //     comments: comment ? route.comments.concat([comment]) : route.comments,
        //     confirmation: route.confirmation || {
        //         email: null,
        //         date: null,
        //         confirmed: null
        //     }
        // };

        // this.ngFireService.update('routes', route.id, routeObj)
        // .then(_ => this.matDialog.closeAll())
        // .catch(error => {
        //     this.pending$.next(false);
        //     this.error$.next(error.message);
        // });
    }

    compareWith = (o1: any, o2: any) => {
        return o1.id === o2.id;
    }

    clearDate(route: Route) {
        route.loadDate = null;
    }

    setStops(route: Route, noOfStops: number) {
        this.stops = [];
        for (let i = 0; i < noOfStops; i++) {
            this.stops.push(route.ratePerDrop[i] || null);
        }
    }

    ratePerDropEdit(route: Route, rate: number) {
        this.ratePerDrop = rate;
        route.ratePerDrop = this.stops.map(_ => rate);
    }

    checkBoxChanged(route: Route, event: any) {
        const index = route[event.array].indexOf(event.value);
        if (index === -1) {
            route[event.array].push(event.value);
        } else {
            route[event.array].splice(index, 1);
        }
    }

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService
    ) { }
}
