// Angular
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
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
        { name: 'alabama', abbrev: 'al' },
        { name: 'alaska', abbrev: 'ak' },
        { name: 'arizona', abbrev: 'az' },
        { name: 'arkansas', abbrev: 'ar' },
        { name: 'california', abbrev: 'ca' },
        { name: 'colorado', abbrev: 'co' },
        { name: 'connecticut', abbrev: 'ct' },
        { name: 'delaware', abbrev: 'de' },
        { name: 'florida', abbrev: 'fl' },
        { name: 'georgia', abbrev: 'ga' },
        { name: 'hawaii', abbrev: 'hi' },
        { name: 'idaho', abbrev: 'id' },
        { name: 'illinois', abbrev: 'il' },
        { name: 'indiana', abbrev: 'in' },
        { name: 'iowa', abbrev: 'ia' },
        { name: 'kansas', abbrev: 'ks' },
        { name: 'kentucky', abbrev: 'ky' },
        { name: 'louisiana', abbrev: 'la' },
        { name: 'maine', abbrev: 'me' },
        { name: 'maryland', abbrev: 'md' },
        { name: 'massachusetts', abbrev: 'ma' },
        { name: 'michigan', abbrev: 'mi' },
        { name: 'minnesota', abbrev: 'mn' },
        { name: 'mississippi', abbrev: 'ms' },
        { name: 'missouri', abbrev: 'mo' },
        { name: 'montana', abbrev: 'mt' },
        { name: 'nebraska', abbrev: 'ne' },
        { name: 'nevada', abbrev: 'nv' },
        { name: 'new hampshire', abbrev: 'nh' },
        { name: 'new jersey', abbrev: 'nj' },
        { name: 'new mexico', abbrev: 'nm' },
        { name: 'new york', abbrev: 'ny' },
        { name: 'north carolina', abbrev: 'nc' },
        { name: 'north dakota', abbrev: 'nd' },
        { name: 'ohio', abbrev: 'oh' },
        { name: 'oklahoma', abbrev: 'ok' },
        { name: 'oregon', abbrev: 'or' },
        { name: 'pennsylvania', abbrev: 'pa' },
        { name: 'rhode island', abbrev: 'ri' },
        { name: 'south carolina', abbrev: 'sc' },
        { name: 'south dakota', abbrev: 'sd' },
        { name: 'tennessee', abbrev: 'tn' },
        { name: 'texas', abbrev: 'tx' },
        { name: 'utah', abbrev: 'ut' },
        { name: 'vermont', abbrev: 'vt' },
        { name: 'virginia', abbrev: 'va' },
        { name: 'washington', abbrev: 'wa' },
        { name: 'west virginia', abbrev: 'wv' },
        { name: 'wisconsin', abbrev: 'wi' },
        { name: 'wyoming', abbrev: 'wy' },
    ];

    add(route: Route, comment: Comment) {
        this.pending$.next(true);

        const routeObj: Route = {
            id: null,
            customers: route.customers || [],
            routeNumber: route.routeNumber,
            dateAdded: new Date().getTime(),
            rate: route.rate || {
                id: null,
                isActive: null,
                ratePerMile: null,
                name: null
            },
            ratePerDrop: route.ratePerDrop || null,
            truck: route.truck || {
                id: null,
                isActive: null,
                name: null
            },
            trailer: route.trailer || {
                id: null,
                isActive: null,
                name: null
            },
            driver: route.driver || {
                id: null,
                isActive: null,
                name: null
            },
            temp: route.temp || null,
            loadLocation: route.loadLocation || {
                id: null,
                isActive: null,
                name: null
            },
            loadMonth: route.loadDate ? new Date(route.loadDate).getMonth() + 1 : null,
            loadDate: route.loadDate ? new Date(route.loadDate).getTime() : null,
            origin: route.origin || {
                city: null,
                state: null
            },
            destination: route.destination || {
                city: null,
                state: null
            },
            miles: route.miles || null,
            noOfStops: route.noOfStops || null,
            pickUpItems: route.pickUpItems || [],
            refNumber1: route.refNumber1 || null,
            refNumber2: route.refNumber2 || null,
            refNumber3: route.refNumber3 || null,
            comments: comment ? [comment] : [],
            confirmation: route.confirmation || {
                user: null,
                date: null
            }
        };

        this.ngFireService.add('routes', routeObj)
        .then(_ => this.matDialog.closeAll())
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error.message);
        });
    }

    save(route: Route, comment: Comment) {
        this.pending$.next(true);

        const routeObj: Route = {
            id: null,
            customers: route.customers || [],
            routeNumber: route.routeNumber,
            dateAdded: route.dateAdded,
            rate: {
                id: route.rate.id || null,
                isActive: route.rate.isActive || null,
                ratePerMile: route.rate.ratePerMile || null,
                name: route.rate.name || null
            },
            ratePerDrop: route.ratePerDrop || null,
            truck: route.truck || {
                id: null,
                isActive: null,
                name: null
            },
            trailer: route.trailer || {
                id: null,
                isActive: null,
                name: null
            },
            driver: route.driver || {
                id: null,
                isActive: null,
                name: null
            },
            temp: route.temp || null,
            loadLocation: route.loadLocation || {
                id: null,
                isActive: null,
                name: null
            },
            loadMonth: route.loadDate ? new Date(route.loadDate).getMonth() + 1 : null,
            loadDate: route.loadDate ? new Date(route.loadDate).getTime() : null,
            origin: {
                city: route.origin.city ? route.origin.city.toLowerCase().trim() : null,
                state: route.origin.state ? route.origin.state : null
            },
            destination: {
                city: route.destination.city ? route.destination.city.toLowerCase().trim() : null,
                state: route.destination.state ? route.destination.state : null
            },
            miles: route.miles || null,
            noOfStops: route.noOfStops || null,
            pickUpItems: route.pickUpItems || [],
            refNumber1: route.refNumber1 || null,
            refNumber2: route.refNumber2 || null,
            refNumber3: route.refNumber3 || null,
            comments: comment ? route.comments.concat([comment]) : route.comments,
            confirmation: route.confirmation || {
                user: null,
                date: null
            }
        };

        this.ngFireService.update('routes', route.id, routeObj)
        .then(_ => this.matDialog.closeAll())
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error.message);
        });
    }

    clearDate(route: Route) {
        route.loadDate = null;
    }

    setStops(route: Route, noOfStops: number) {
        const ratesPerDrop = [];
        for (let i = 0; i < noOfStops; i++) {
            ratesPerDrop.push({
                stop: i,
                rate: route.ratePerDrop[i] || null
            });
        }
        route.ratePerDrop = ratesPerDrop;
    }

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService
    ) { }
}
