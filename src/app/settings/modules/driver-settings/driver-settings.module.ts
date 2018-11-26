// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
// Module Containers
import { DriverSettingsContainerComponent } from './containers/driver-settings-container/driver-settings-container.component';
import {
    DriverSettingsDialogContainerComponent
} from './containers/driver-settings-dialog-container/driver-settings-dialog-container.component';
// Module Components
import { DriverSettingsDialogComponent } from './components/driver-settings-dialog/driver-settings-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatInputModule,
        RouterModule.forChild([
            { path: '', component: DriverSettingsContainerComponent },
        ]),
        SharedModule
    ],
    declarations: [
        DriverSettingsContainerComponent,
        DriverSettingsDialogContainerComponent,
        DriverSettingsDialogComponent
    ],
    entryComponents: [DriverSettingsDialogContainerComponent]
})
export class DriverSettingsModule { }
