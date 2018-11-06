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
    TrailerSettingsDialogContainerComponent
} from '../containers/trailer-settings-dialog-container/trailer-settings-dialog-container.component';

@Injectable()
export class TrailerSettingsService {
    columns = [
        { id: 'name', name: 'Name', type: 'string' },
        { id: 'isActive', name: 'Active', type: 'boolean' }
    ];

    columnObjArr$ = new Subject<any[]>();
    columnStringArr$ = new Subject<string[]>();
    dataSource = new MatTableDataSource<any>();

    dataSource$ = this.ngFireService.loadCollection('trailers', 'name', 'asc').pipe(
        tap(trailers => this.dataSource.data = trailers),
        tap(_ => this.columnObjArr$.next(this.columns)),
        tap(_ => this.columnStringArr$.next(this.columns.map(column => column.id)))
    );

    add() {
        this.matDialog.open(TrailerSettingsDialogContainerComponent, { data: { isActive: true } });
    }

    edit(row) {
        this.matDialog.open(TrailerSettingsDialogContainerComponent, { data: row });
    }

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService
    ) { }
}
