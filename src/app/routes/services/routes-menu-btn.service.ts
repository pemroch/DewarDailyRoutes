// Angular
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
// firebase
import { firestore } from 'firebase/app';
// Shared Models
import { Route } from '@shared/models';
// Module Services
import { RoutesTableService } from '../services/routes-table.service';
// Module Components
import {
    RoutesDialogContainerComponent
} from '../containers/routes-dialog-container/routes-dialog-container.component';

@Injectable()
export class RoutesMenuBtnService {

    /* Service Functions **/

    addRoute() {
        setTimeout(() => {
            this.matDialog.open(RoutesDialogContainerComponent, { data: null, width: '90%', height: '90%' });
        }, 400);
    }

    fileInputClick($event) {
        setTimeout(() => {
            $event.click();
        }, 400);
    }

    uploadRoutes($event) {
        const input = $event.target;

        if (input.files.length) {
            let text = null;
            const reader = new FileReader();
            const onloadend = event => {
                text = reader.result;

                const parser = new DOMParser().parseFromString(text, 'text/xml');
                const sections = parser.getElementsByTagName('section');

                const stops = this.extractStops(sections);
                const routes = this.extractRoutes(stops);
                const newRoutes = this.setupRoutes(routes);
                this.saveRoutes(newRoutes);
            };
            reader.onloadend = onloadend;
            reader.readAsText(input.files[0]);
        }
    }

    /* Helper Functions **/

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

    setupRoutes(routes) {
        const newRoutes = [];

        for (const route in routes) {
            if (routes[route]) {
                const newRoute = routes[route].reduce((prev: any, curr: any, index: number, array: any[]) => {

                    /** customers */
                    const customerRef = curr['rpt_delivery_route.ship_to_name'] || '';

                    this.routesTableService.customersObjRef$.getValue().arr.map((customer: string) => {
                        const data = this.routesTableService.customersObjRef$.getValue().byName[customer];
                        if (customerRef.includes(customer) && !prev.customers.includes(data.id)) {
                            prev.customers.push(data.id);
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
                    this.routesTableService.pickUpItemsObjRef$.getValue().arr.map((pickUpItem: string) => {
                        const data = this.routesTableService.pickUpItemsObjRef$.getValue().byName[pickUpItem];
                        if (pickUpItemsRef.includes(pickUpItem) && !prev.pickUpItems.includes(data.id)) {
                            prev.pickUpItems.push(data.id);
                        }
                    });

                    return prev;
                }, {
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
                    rate: { id: null, ratePerMile: null, name: null },
                    ratePerDrop: [],
                    refNumber1: null,
                    refNumber2: null,
                    refNumber3: null,
                    routeNumber: null,
                    temp: null,
                    trailer: null,
                    truck: null
                });

                newRoutes.push(newRoute);
            }
        }

        return newRoutes;
    }

    saveRoutes(newRoutes: Route[]) {
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
            .catch(error => {
                console.log(error.message);
            });
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    constructor(
        public matDialog: MatDialog,
        public routesTableService: RoutesTableService
    ) { }
}
