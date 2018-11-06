// Angular
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
// rxjs
import { Subject } from 'rxjs';
// Shared Services
import { NgFireService } from '@shared/services';
// Shared Models
import { Trailer } from '@shared/models';

@Injectable()
export class TrailerSettingsDialogService {
    error$ = new Subject<string>();
    pending$ = new Subject<boolean>();

    add(trailer: Trailer) {
        this.pending$.next(true);
        this.ngFireService.add('trailers', {
            isActive: trailer.isActive || false,
            name: trailer.name.toLowerCase().trim()
        })
        .then(_ => this.matDialog.closeAll())
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error.message);
        });
    }

    save(trailer: Trailer) {
        this.pending$.next(true);
        this.ngFireService.update('trailers', trailer.id, {
            isActive: trailer.isActive || false,
            name: trailer.name.toLowerCase().trim()
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
