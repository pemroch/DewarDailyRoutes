// Angular
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
// rxjs
import { Subject } from 'rxjs';
// Shared Services
import { NgFireService } from '@shared/services';

@Injectable()
export class DriverDialogService {
    error$ = new Subject<string>();
    pending$ = new Subject<boolean>();

    add(driver) {
        this.pending$.next(true);
        this.ngFireService.add('drivers', {
            name: driver.name.toLowerCase().trim()
        })
        .then(_ => this.matDialog.closeAll())
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error.message);
        });
    }

    save(driver) {
        this.pending$.next(true);
        this.ngFireService.update('drivers', driver.id, {
            name: driver.name.toLowerCase().trim()
        })
        .then(_ => this.matDialog.closeAll())
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error.message);
        });
    }

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService
    ) { }
}
