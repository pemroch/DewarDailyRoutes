// Angular
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
// rxjs
import { Subject } from 'rxjs';
// Shared Services
import { NgFireService } from '@shared/services';
// Shared Models
import { Customer } from '@shared/models';

@Injectable()
export class CustomerSettingsDialogService {
    error$ = new Subject<string>();
    pending$ = new Subject<boolean>();

    add(customer: Customer) {
        this.pending$.next(true);
        this.ngFireService.add('customers', {
            isActive: customer.isActive || false,
            name: customer.name.toLowerCase().trim()
        })
        .then(_ => this.matDialog.closeAll())
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error.message);
        });
    }

    save(customer: Customer) {
        this.pending$.next(true);
        this.ngFireService.update('customers', customer.id, {
            isActive: customer.isActive || false,
            name: customer.name.toLowerCase().trim()
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
