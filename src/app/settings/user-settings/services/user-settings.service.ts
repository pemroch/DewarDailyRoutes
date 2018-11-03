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
    UserSettingsDialogContainerComponent
} from '../containers/user-settings-dialog-container/user-settings-dialog-container.component';

@Injectable()
export class UserSettingsService {
    columns = [
        { id: 'name', name: 'Name', type: 'string' },
        { id: 'email', name: 'Email', type: 'string' },
        { id: 'isAdmin', name: 'Admin', type: 'boolean' },
    ];

    columnObjArr$ = new Subject<any[]>();
    columnStringArr$ = new Subject<string[]>();
    dataSource = new MatTableDataSource<any>();

    dataSource$ = this.ngFireService.loadCollection('users', 'name', 'asc').pipe(
        tap(users => this.dataSource.data = users),
        tap(_ => this.columnObjArr$.next(this.columns)),
        tap(_ => this.columnStringArr$.next(this.columns.map(column => column.id)))
    );

    addUser() {
        this.matDialog.open(UserSettingsDialogContainerComponent, { data: {} });
    }

    edit(row) {
        this.matDialog.open(UserSettingsDialogContainerComponent, { data: row });
    }

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService
    ) { }
}
