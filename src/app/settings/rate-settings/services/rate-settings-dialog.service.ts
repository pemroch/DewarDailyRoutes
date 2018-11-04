// Angular
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
// rxjs
import { Subject } from 'rxjs';
// Shared Services
import { NgFireService } from '@shared/services';
// Shared Models
import { Rate } from '@shared/models';

@Injectable()
export class RateSettingsDialogService {
    error$ = new Subject<string>();
    pending$ = new Subject<boolean>();

    add(rate: Rate) {
        this.pending$.next(true);
        this.ngFireService.add('rates', {
            name: rate.name.trim(),
            ratePerMile: rate.ratePerMile
        })
        .then(_ => this.matDialog.closeAll())
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error.message);
        });
    }

    save(rate: Rate) {
        this.pending$.next(true);
        this.ngFireService.update('rates', rate.id, {
            name: rate.name.trim(),
            ratePerMile: rate.ratePerMile
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
