// Angular
import { Injectable } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
// rxjs
import { tap } from 'rxjs/operators';
// Shared Services
import { NgFireService } from '@shared/services';
// Shared Components
import { AddUserDialogComponent } from '../components/add-user-dialog/add-user-dialog.component';

@Injectable()
export class UsersService {

    columnObjArr = [
        { id: 'name', name: 'Name', type: 'string' },
        { id: 'email', name: 'Email', type: 'string' },
        { id: 'isAdmin', name: 'Admin', type: 'boolean' },
    ];
    columnStringArr = this.columnObjArr.map(column => column.id);
    dataSource = new MatTableDataSource<any>();

    tableData$ = this.ngFireService.loadCollection('users').pipe(
        tap(users => this.dataSource.data = users)
    );

    applyFilter(value) {
        this.dataSource.filter = value.toLowerCase().trim();
    }

    addUser() {
        this.matDialog.open(AddUserDialogComponent)
        .keydownEvents()
        .subscribe(e => console.log(e));
    }

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService
    ) { }
}
