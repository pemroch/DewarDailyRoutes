// Angular
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
// Module Services
import { CustomerSettingsDialogService } from '../../services/customer-settings-dialog.service';

@Component({
    selector: 'app-customer-settings-dialog-container',
    template: `
        <app-customer-settings-dialog
            [customer]="this.customer"
            [pending]="this.customerSettingsDialogService.pending$ | async"
            [error]="this.customerSettingsDialogService.error$ | async"
            (add)="this.customerSettingsDialogService.add(customer)"
            (save)="this.customerSettingsDialogService.save(customer)"
        ></app-customer-settings-dialog>
    `,
    providers: [CustomerSettingsDialogService]
})
export class CustomerSettingsDialogContainerComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public customer: any,
        public customerSettingsDialogService: CustomerSettingsDialogService
    ) { }
}
