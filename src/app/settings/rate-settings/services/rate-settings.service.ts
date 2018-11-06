// Angular
import { Injectable } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
// rxjs
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
// Shared Services
import { NgFireService } from '@shared/services';
// Module Components
import {
    RateSettingsDialogContainerComponent
} from '../containers/rate-settings-dialog-container/rate-settings-dialog-container.component';

@Injectable()
export class RateSettingsService {
    columns = [
        { id: 'name', name: 'Name', type: 'string' },
        { id: 'ratePerMile', name: 'Rate/Mile', type: 'currency' },
        { id: 'isActive', name: 'Active', type: 'boolean' }
    ];

    columnObjArr$ = new Subject<any[]>();
    columnStringArr$ = new Subject<string[]>();
    dataSource = new MatTableDataSource<any>();

    dataSource$ = this.ngFireService.loadCollection('rates', 'name', 'asc').pipe(
        tap(rates => this.dataSource.data = rates),
        tap(_ => this.columnObjArr$.next(this.columns)),
        tap(_ => this.columnStringArr$.next(this.columns.map(column => column.id)))
    );

    add() {
        this.matDialog.open(RateSettingsDialogContainerComponent, { data: { isActive: true } });
    }

    edit(row) {
        this.matDialog.open(RateSettingsDialogContainerComponent, { data: row });
    }

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService
    ) { }
}
