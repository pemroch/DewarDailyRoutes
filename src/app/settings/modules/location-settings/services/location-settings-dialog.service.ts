// Angular
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
// rxjs
import { Subject } from 'rxjs';
// Shared Services
import { NgFireService } from '@shared/services';
// Shared Models
import { Location } from '@shared/models';

@Injectable()
export class LocationSettingsDialogService {
    error$ = new Subject<string>();
    pending$ = new Subject<boolean>();

    add(location: Location) {
        this.pending$.next(true);
        this.ngFireService.add('locations', {
            isActive: location.isActive || false,
            name: location.name.toLowerCase().trim()
        })
        .then(_ => this.matDialog.closeAll())
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error.message);
        });
    }

    save(location: Location) {
        this.pending$.next(true);
        this.ngFireService.update('locations', location.id, {
            isActive: location.isActive || false,
            name: location.name.toLowerCase().trim()
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
