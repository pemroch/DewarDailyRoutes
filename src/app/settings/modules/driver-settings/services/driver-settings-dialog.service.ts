// Angular
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
// rxjs
import { Subject } from 'rxjs';
// Shared Services
import { NgFireService } from '@shared/services';
// Shared Models
import { Driver } from '@shared/models';

@Injectable()
export class DriverSettingsDialogService {
    error$ = new Subject<string>();
    pending$ = new Subject<boolean>();

    add(driver: Driver) {
        this.pending$.next(true);
        this.ngFireService.add('drivers', {
            isActive: driver.isActive || false,
            name: driver.name.toLowerCase().trim()
        })
        .then(_ => this.matDialog.closeAll())
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error.message);
        });
    }

    save(driver: Driver) {
        this.pending$.next(true);
        this.ngFireService.update('drivers', driver.id, {
            isActive: driver.isActive || false,
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
