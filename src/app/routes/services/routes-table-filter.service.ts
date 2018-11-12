// Angular
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
// Shared Models
import { Route } from '@shared/models';
// Module Services
import { RoutesTableService } from '../services/routes-table.service';

@Injectable()
export class RoutesTableFilterService {
    dataSource: MatTableDataSource<Route[]> = this.routesTableService.dataSource;

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.toLowerCase().trim();

        this.dataSource.filterPredicate = (data: any[], filter: string): boolean => {
            let string = '';
            for (const prop in data) {
                if (data[prop]) {

                    if (Array.isArray(data[prop]) && data[prop].length) {
                        if (prop === 'customers') {
                            data[prop].forEach(value => string += this.routesTableService.customersObjRef$.getValue().byId[value].name);
                        } else if (prop === 'pickUpItems') {
                            data[prop].forEach(value => string += this.routesTableService.pickUpItemsObjRef$.getValue().byId[value].name);
                        }
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
                    } else if (prop === 'loadLocation') {
                        string += this.routesTableService.locationsObjRef$.getValue().byId[data[prop]].name;
                    } else if (prop === 'driver') {
                        string += this.routesTableService.driversObjRef$.getValue().byId[data[prop]].name;
                    } else if (prop === 'truck') {
                        string += this.routesTableService.trucksObjRef$.getValue().byId[data[prop]].name;
                    } else if (prop === 'trailer') {
                        string += this.routesTableService.trailersObjRef$.getValue().byId[data[prop]].name;
                    } else {
                        string += data[prop].toString().toLowerCase().trim();
                    }

                }
            }

            if (string.includes(filter)) {
                return true;
            } else {
                return false;
            }

        };
    }

    constructor(private routesTableService: RoutesTableService) { }
}
