import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { firestore } from 'firebase/app';

import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

import { NgFireService } from '@shared/services';

import { RoutesTableService } from './routes-table.service';
import { SharedRoutesService } from './shared-routes.service';

@Injectable()
export class SearchService {
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
    searchForm$ = new BehaviorSubject<any>({
        loadDateStart: null,
        loadDateEnd: null,
        loadLocation: { id: null },
        truck: { id: null },
        trailer: { id: null },
        driver: { id: null },
        origin: { name: null },
        destination: { name: null },
        rate: { id: null },
        customers: {},
        pickUpItems: {},
    });
    drivers$ = this.ngFireService.load1Condition('drivers', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    trucks$ = this.ngFireService.load1Condition('trucks', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    trailers$ = this.ngFireService.load1Condition('trailers', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    rates$ = this.ngFireService.load1Condition('rates', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    locations$ = this.ngFireService.load1Condition('locations', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    customers$ = this.ngFireService.load1Condition('customers', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    pickUpItems$ = this.ngFireService.load1Condition('pickUpItems', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));

    constructor(
        private router: Router,
        private ngFireService: NgFireService,
        private routesTableService: RoutesTableService,
        private sharedRoutesService: SharedRoutesService
    ) { }

    clearDate(prop: string) {
        this.searchForm$.next(Object.assign({}, this.searchForm$.getValue(), { [prop]: null }));
    }

    async search() {
        const customers = Object.keys(this.searchForm$.getValue().customers)
            .filter(customerId => this.searchForm$.getValue().customers[customerId]).join('');
        const pickUpItems = Object.keys(this.searchForm$.getValue().pickUpItems)
            .filter(pickUpItemId => this.searchForm$.getValue().pickUpItems[pickUpItemId]).join('');

        let ref = firestore().collection('routes')
            .where('loadDate', '>=', new Date(this.searchForm$.getValue().loadDateStart).getTime())
            .where('loadDate', '<=', new Date(this.searchForm$.getValue().loadDateEnd).getTime());

        if (this.searchForm$.getValue().loadLocation.id) {
            ref = ref.where('loadLocation.id', '==', this.searchForm$.getValue().loadLocation.id);
        }
        if (this.searchForm$.getValue().truck.id) {
            ref = ref.where('truck.id', '==', this.searchForm$.getValue().truck.id);
        }
        if (this.searchForm$.getValue().trailer.id) {
            ref = ref.where('trailer.id', '==', this.searchForm$.getValue().trailer.id);
        }
        if (this.searchForm$.getValue().driver.id) {
            ref = ref.where('driver.id', '==', this.searchForm$.getValue().driver.id);
        }
        if (this.searchForm$.getValue().origin.name) {
            ref = ref.where('origin.state', '==', this.searchForm$.getValue().origin.name);
        }
        if (this.searchForm$.getValue().destination.name) {
            ref = ref.where('destination.state', '==', this.searchForm$.getValue().destination.name);
        }
        if (this.searchForm$.getValue().rate.id) {
            ref = ref.where('rate.id', '==', this.searchForm$.getValue().rate.id);
        }

        return ref.get()
        .then(routes => {
            this.sharedRoutesService.searchSideNavOpened$.next(false);

            this.routesTableService.dataSource.data = routes.docs
                .map(route => {
                    console.log(route.data());
                    return route.data();
                })
                .map(route => Object.assign({}, route, { month: route.loadDate ? this.getMonday(route.loadDate) : null }))
                .filter(route => {
                    const customersMatch = route.customers.some(customer => customers.includes(customer.id));
                    const pickUpItemsMatch = route.pickUpItems.some(pickUpItem => pickUpItems.includes(pickUpItem.id));

                    if (customers.length && pickUpItems.length) { /* Filter Both **/
                        return customersMatch && pickUpItemsMatch;
                    } else if (customers.length || pickUpItems.length) { /* Filter One or the Other **/
                        return customersMatch || pickUpItemsMatch;
                    } else { /* No Filter **/
                        return true;
                    }
                });

            this.sharedRoutesService.hasSearch$.next(true);
            this.sharedRoutesService.title$.next(
                new Date(this.searchForm$.getValue().loadDateStart).toLocaleDateString()
                + ' - '
                + new Date(this.searchForm$.getValue().loadDateEnd).toLocaleDateString()
            );
        });
    }

    closeSearch() {
        this.sharedRoutesService.searchSideNavOpened$.next(false);
    }

    getMonday(d) {
        d = new Date(d);
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(d.setDate(diff)).getMonth() + 1;
    }
}
