// Angular
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
// rxjs
import { Subject } from 'rxjs';
// Shared Services
import { NgFireService } from '@shared/services';
// Shared Models
import { PickUpItem } from '@shared/models';

@Injectable()
export class PickUpItemSettingsDialogService {
    error$ = new Subject<string>();
    pending$ = new Subject<boolean>();

    add(pickUpItem: PickUpItem) {
        this.pending$.next(true);
        this.ngFireService.add('pickUpItems', {
            isActive: pickUpItem.isActive || false,
            name: pickUpItem.name.toLowerCase().trim()
        })
        .then(_ => this.matDialog.closeAll())
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error.message);
        });
    }

    save(pickUpItem: PickUpItem) {
        this.pending$.next(true);
        this.ngFireService.update('pickUpItems', pickUpItem.id, {
            isActive: pickUpItem.isActive || false,
            name: pickUpItem.name.toLowerCase().trim()
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
