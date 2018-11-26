// Angular
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
// rxjs
import { Subject } from 'rxjs';
// Shared Services
import { NgFireService } from '@shared/services';
// Shared Models
import { Truck } from '@shared/models';

@Injectable()
export class TruckSettingsDialogService {
    error$ = new Subject<string>();
    pending$ = new Subject<boolean>();

    add(truck: Truck) {
        this.pending$.next(true);
        this.ngFireService.add('trucks', {
            isActive: truck.isActive || false,
            name: truck.name.toLowerCase().trim()
        })
        .then(_ => this.matDialog.closeAll())
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error.message);
        });
    }

    save(truck: Truck) {
        this.pending$.next(true);
        this.ngFireService.update('trucks', truck.id, {
            isActive: truck.isActive || false,
            name: truck.name.toLowerCase().trim()
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
