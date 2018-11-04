// Angular
import { Injectable } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
// rxjs
import { take, tap } from 'rxjs/operators';
// Shared Services
import { NgFireService } from '@shared/services';
// Shared Models
import { RouteNumber } from '@shared/models';
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
        'truck',
        'trailer',
        'driver',
        'temp',
        'origin',
        'destination',
        'miles',
        'noOfStops',
        'pickups',
        'loadDate',
        'confirmation'
    ];
    dataSource = new MatTableDataSource<any>();
    dataSource$ = this.ngFireService.loadCollection('routes', 'dateAdded', 'asc').pipe(
        tap(routes => this.dataSource.data = routes),
    );

    addRoute() {
        this.ngFireService.loadDocument('routeNumber', 'route').pipe(
            take(1)
        ).toPromise()
        .then((route: RouteNumber) => {
            const month = new Date().getMonth() + 1;
            this.matDialog.open(ActiveRoutesDialogContainerComponent, {
                data: {
                    rate: {},
                    routeNumber: {
                        month: month,
                        number: route.number,
                    },
                    origin: {},
                    destination: {},
                    confirmation: {
                        user: null,
                        date: null,
                        eta: null
                    }
                },
                width: '90%',
                height: '90%'
            });
        });
    }

    editRoute(route) {
        this.matDialog.open(ActiveRoutesDialogContainerComponent, { data: route });
    }

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService
        ) { }
}
