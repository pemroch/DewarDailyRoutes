// Angular
import { Injectable } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
// rxjs
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
// Shared Services
import { NgFireService } from '@shared/services';
// Module Components
import { DriverDialogContainerComponent } from '../containers/driver-dialog-container/driver-dialog-container.component';

@Injectable()
export class DriversService {
    columns = [
        { id: 'name', name: 'Name', type: 'string' }
    ];

    columnObjArr$ = new Subject<any[]>();
    columnStringArr$ = new Subject<string[]>();
    dataSource = new MatTableDataSource<any>();

    dataSource$ = this.ngFireService.loadCollection('drivers', 'name', 'asc').pipe(
        tap(drivers => this.dataSource.data = drivers),
        tap(_ => this.columnObjArr$.next(this.columns)),
        tap(_ => this.columnStringArr$.next(this.columns.map(column => column.id)))
    );

    addDriver() {
        this.matDialog.open(DriverDialogContainerComponent, { data: {} });
    }

    edit(row) {
        this.matDialog.open(DriverDialogContainerComponent, { data: row });
    }

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService
    ) { }
}
