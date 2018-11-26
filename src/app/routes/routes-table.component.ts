import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { RoutesTableService } from './services/routes-table.service';
import { TableComponent } from './components/table.component';

@Component({
    selector: 'app-routes-table',
    template: `
        <app-table-filter
            [dataSourceLength]="this.routesTableService.dataSource.data?.length"
            (applyFilter)="this.routesTableService.applyFilter($event)"
        ></app-table-filter>
        <app-table
            #tableComponent
            [displayedColumns]="this.routesTableService.displayedColumns"
            [dataSource]="this.routesTableService.dataSource"
            [drivers]="this.routesTableService.drivers$ | async"
            [trucks]="this.routesTableService.trucks$ | async"
            [trailers]="this.routesTableService.trailers$ | async"
            [locations]="this.routesTableService.locations$ | async"
            [customers]="this.routesTableService.customers$ | async"
            [pickUpItems]="this.routesTableService.pickUpItems$ | async"
            (edit)="this.routesTableService.editRoute($event)"
        ></app-table>
    `
})
export class RoutesTableComponent implements OnInit, OnDestroy {
    dataSourceSubscription: Subscription;

    @ViewChild('tableComponent') tableComponent: TableComponent;

    constructor(public routesTableService: RoutesTableService) { }

    ngOnInit() {
        this.dataSourceSubscription = this.routesTableService.dataSource$.pipe(
            delay(800),
            tap(_ => this.routesTableService.dataSource.sort = this.tableComponent.matSort)
        ).subscribe();
    }

    ngOnDestroy() {
        this.dataSourceSubscription.unsubscribe();
    }
}
