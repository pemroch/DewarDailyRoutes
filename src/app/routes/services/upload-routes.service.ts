import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { firestore } from 'firebase/app';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

import { NgFireService } from '@shared/services';
import { PickUpItem, Rate, Route } from '@shared/models';

@Injectable()
export class UploadRoutesService {
    error$ = new Subject<string>();
    pending$ = new Subject<boolean>();
    rates$ = this.ngFireService.load1Condition('rates', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));
    pickUpItems$ = this.ngFireService.load1Condition('pickUpItems', 'isActive', '==', true, 'name', 'asc').pipe(delay(400));

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService,
    ) { }

    fileInputClick($event) {
        setTimeout(() => {
            $event.click();
        }, 400);
    }

    uploadRoutes(props: { $event: any, rate: Rate, pickUpItems: PickUpItem[] }) {
        const pickUpItemsRate = props.pickUpItems.reduce((prev: any, curr: any) => {
            if (curr.ratePerItem) {
                prev[curr.name.replace(/\W/g, '')] = curr.ratePerItem;
            }
            return prev;
        }, {});

        this.pending$.next(true);
        const input = props.$event.target;

        if (input.files.length) {
            let text = null;
            const reader = new FileReader();
            const onloadend = _ => {
                text = reader.result;

                const parser = new DOMParser().parseFromString(text, 'text/xml');
                const sections = parser.getElementsByTagName('section');

                const stops = this.extractStops(sections);
                const routes = this.extractRoutes(stops);

                this.setupRoutes(routes, props.rate, pickUpItemsRate)
                    // .then(newRoutes => this.saveRoutes(newRoutes));
                    .then(newRoutes => console.log(newRoutes));
            };
            reader.onloadend = onloadend;
            reader.readAsText(input.files[0]);
        }
    }

    extractStops(sections) {
        const sectionsArr = [];
        for (let i = 0; i < sections.length; i++) {
            const sectionTexts = sections[i].querySelectorAll('text');
            if (sectionTexts.length) {
                sectionsArr.push(sectionTexts);
            }
        }
        return sectionsArr;
    }

    extractRoutes(stops) {
        const routes = {};

        for (let i = 0; i < stops.length; i++) {
            const stop = {};
            for (let j = 0; j < stops[i].length; j++) {
                const value = stops[i][j].attributes[0].value;
                if (
                    value === 'rpt_delivery_route.version' ||
                    value === 'rpt_delivery_route.record_status' ||
                    value === 'rpt_delivery_route.vehicle_code' ||
                    value === 'rpt_delivery_route.delivery_sequence' ||
                    value === 'rpt_delivery_route.container_count1' ||
                    value === 'rpt_delivery_route.container_count2' ||
                    value === 'rpt_delivery_route.container_count3' ||
                    value === 'rpt_delivery_route.total_size' ||
                    value === 'rpt_delivery_route.total_weight' ||
                    value === 'rpt_delivery_route.rack_size' ||
                    value === 'rpt_delivery_route.rack_count' ||
                    value === 'rpt_delivery_route.container_capacity' ||
                    value === 'rpt_delivery_route.weight_capacity' ||
                    value === 'rpt_delivery_route.ship_to_zipcode' ||
                    value === 'rpt_delivery_route.load_number' ||
                    value === 'rpt_delivery_route.priority' ||
                    value === 'rpt_delivery_route.units' ||
                    value === 'rpt_delivery_route.order_qty'
                ) {
                    stop[value] = Number(stops[i][j].textContent);
                } else if (
                    value === 'rpt_delivery_route.ship_date' ||
                    value === 'rpt_delivery_route.load_date' ||
                    value === 'rpt_delivery_route.delivery_date'
                ) {
                    stop[value] = new Date(stops[i][j].textContent).getTime();
                } else {
                    stop[value] = stops[i][j].textContent.toLowerCase().replace(/\W/g, '');
                }
            }

            routes[stop['rpt_delivery_route.vehicle_code']] = routes[stop['rpt_delivery_route.vehicle_code']] || [];
            routes[stop['rpt_delivery_route.vehicle_code']].push(stop);
        }

        return routes;
    }

    async setupRoutes(routes, rate: Rate, pickUpItemsRate: any) {
        const customersProm = firestore().collection('customers').get()
            .then(query => {
                return query.docs.reduce((prev: any, curr: any) => {
                    const customer = curr.data();
                    prev.arr.push(customer.name.replace(/\W/g, ''));
                    prev.byName[customer.name.replace(/\W/g, '')] = customer;
                    return prev;
                }, { arr: [], byName: {} });
            });

        const pickUpItemsProm = firestore().collection('pickUpItems').get()
            .then(query => {
                return query.docs.reduce((prev: any, curr: any) => {
                    const pickUpItem = curr.data();
                    prev.arr.push(pickUpItem.name.replace(/\W/g, ''));
                    prev.byName[pickUpItem.name.replace(/\W/g, '')] = pickUpItem;
                    return prev;
                }, { arr: [], byName: {} });
            });

        return Promise.all([customersProm, pickUpItemsProm])
        .then(([customers, pickUpItems]) => {
            const newRoutes = [];

            for (const route in routes) {
                if (routes[route]) {
                    const newRoute = routes[route].reduce((prev: any, curr: any, index: number, array: any[]) => {

                        /** customers */
                        const customerRef = curr['rpt_delivery_route.ship_to_name'] || '';

                        customers.arr.map((customer: string) => {
                            const data = customers.byName[customer];
                            if (customerRef.includes(customer) && (prev.customers.map(e => e.id).indexOf(data.id) === -1)) {
                                prev.customers.push({
                                    id: data.id,
                                    name: data.name
                                });
                            }
                        });

                        /** loadDate */
                        if (!prev.loadDate && curr['rpt_delivery_route.ship_date']) {
                            prev.loadDate = curr['rpt_delivery_route.ship_date'];
                        }

                        /** destination, noOfStops, refNumber1 */
                        if (array.length === index + 1) {
                            prev.destination.city = curr['rpt_delivery_route.ship_to_city'] || null;
                            prev.destination.state = curr['rpt_delivery_route.ship_to_state']
                                ? curr['rpt_delivery_route.ship_to_state'].toUpperCase()
                                : null;
                            prev.noOfStops = curr['rpt_delivery_route.delivery_sequence'] || null;
                            prev.refNumber1 = curr['rpt_delivery_route.vehicle_code'] || null;
                        }

                        /** origin */
                        if (curr['rpt_delivery_route.delivery_sequence'] === 1) {
                            prev.origin.city = curr['rpt_delivery_route.ship_to_city'] || null;
                            prev.origin.state = curr['rpt_delivery_route.ship_to_state']
                                ? prev.origin.state = curr['rpt_delivery_route.ship_to_state'].toUpperCase()
                                : null;
                        }

                        /** pickUpItems */
                        const pickUpItemsRef = curr['rpt_delivery_route.po_number'] || '';

                        pickUpItems.arr.map((pickUpItem: string) => {
                            const data = pickUpItems.byName[pickUpItem];
                            if (pickUpItemsRef.includes(pickUpItem) && (prev.pickUpItems.map(e => e.id).indexOf(data.id) === -1)) {
                                prev.pickUpItems.push({
                                    id: data.id,
                                    name: data.name,
                                    ratePerItem: pickUpItemsRate[pickUpItem] || null
                                });
                            }
                        });

                        /** ratePerStopEach */
                        if (rate.id) {
                            prev.ratePerStopEach.push(rate.ratePerStop);
                        }

                        return prev;
                    }, <Route>{
                        comments: [],
                        confirmation: { confirmed: null, email: null, date: null },
                        customers: [],
                        destination: { city: null, state: null },
                        driver: { id: null, name: null },
                        driverEta: null,
                        id: null,
                        loadDate: null,
                        loadLocation: { id: null, name: null },
                        miles: null,
                        noOfStops: null,
                        origin: { city: null, state: null },
                        pickUpItems: [],
                        rate: rate, // ???
                        ratePerStopEach: [], // ???
                        refNumber1: null,
                        refNumber2: null,
                        refNumber3: null,
                        routeNumber: null,
                        temp: null,
                        trailer: { id: null, name: null },
                        truck: { id: null, name: null }
                    });

                    newRoutes.push(newRoute);
                }
            }

            return newRoutes;
        });
    }

    saveRoutes(newRoutes: any[]) {
        firestore().runTransaction(async transaction => {
            const ref = firestore().collection('routeNumber').doc('route');
            return transaction.get(ref)
            .then(routeRef => {
                const current = routeRef.data().number + newRoutes.length;
                transaction.update(ref, { number: current });
                return current;
            });
        })
        .then(current => {
            const batch = firestore().batch();
            const routeNumber = current - newRoutes.length;

            newRoutes.forEach((route: Route, index) => {
                const ref = firestore().collection('routes').doc();

                route.id = ref.id;
                route.routeNumber = routeNumber + (index + 1);

                batch.set(ref, route);
            });

            batch.commit()
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
}
