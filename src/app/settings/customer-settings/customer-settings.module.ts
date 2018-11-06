// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
// Module Containers
import { CustomerSettingsContainerComponent } from './containers/customer-settings-container/customer-settings-container.component';
import {
    CustomerSettingsDialogContainerComponent
} from './containers/customer-settings-dialog-container/customer-settings-dialog-container.component';
// Module Components
import { CustomerSettingsDialogComponent } from './components/customer-settings-dialog/customer-settings-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatInputModule,
        RouterModule.forChild([
            { path: '', component: CustomerSettingsContainerComponent },
        ]),
        SharedModule
    ],
    declarations: [
        CustomerSettingsContainerComponent,
        CustomerSettingsDialogContainerComponent,
        CustomerSettingsDialogComponent
    ],
    entryComponents: [CustomerSettingsDialogContainerComponent]
})
export class CustomerSettingsModule { }
