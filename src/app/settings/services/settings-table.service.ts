// Angular
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
// rxjs
import { Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
// Shared Services
import { NgFireService } from '@shared/services';

@Injectable()
export class SettingsTableService {

    columnObjArr$ = new Subject<any[]>();
    columnStringArr$ = new Subject<string[]>();
    collection$ = new Subject<string>();

    dataSource = new MatTableDataSource<any>();

    tableData$ = this.collection$.pipe(
        switchMap(collection => this.ngFireService.loadCollection(collection)),
        tap(data => this.dataSource.data = data)
    );

    applyFilter(value) {
        this.dataSource.filter = value.toLowerCase().trim();
    }

    constructor(private ngFireService: NgFireService) { }
}
