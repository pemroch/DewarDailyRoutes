// Angular
import { Injectable } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
// rxjs
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
// Shared Services
import { NgFireService } from '@shared/services';
// Module Components
import { RateDialogContainerComponent } from '../containers/rate-dialog-container/rate-dialog-container.component';

@Injectable()
export class RatesService {
    columns = [
        { id: 'name', name: 'Name', type: 'string' },
        { id: 'ratePerMile', name: 'Rate/Mile', type: 'currency' }
    ];

    columnObjArr$ = new Subject<any[]>();
    columnStringArr$ = new Subject<string[]>();
    dataSource = new MatTableDataSource<any>();

    dataSource$ = this.ngFireService.loadCollection('rates', 'name', 'asc').pipe(
        tap(rates => this.dataSource.data = rates),
        tap(_ => this.columnObjArr$.next(this.columns)),
        tap(_ => this.columnStringArr$.next(this.columns.map(column => column.id)))
    );

    addRate() {
        this.matDialog.open(RateDialogContainerComponent, { data: {} });
    }

    edit(row) {
        this.matDialog.open(RateDialogContainerComponent, { data: row });
    }

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService
    ) { }
}
