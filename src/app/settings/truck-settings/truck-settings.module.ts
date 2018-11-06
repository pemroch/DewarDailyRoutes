// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
// Module Containers
import { TruckSettingsContainerComponent } from './containers/truck-settings-container/truck-settings-container.component';
import {
    TruckSettingsDialogContainerComponent
} from './containers/truck-settings-dialog-container/truck-settings-dialog-container.component';
// Module Components
import { TruckSettingsDialogComponent } from './components/truck-settings-dialog/truck-settings-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatInputModule,
        RouterModule.forChild([
            { path: '', component: TruckSettingsContainerComponent },
        ]),
        SharedModule
    ],
    declarations: [
        TruckSettingsContainerComponent,
        TruckSettingsDialogContainerComponent,
        TruckSettingsDialogComponent
    ],
    entryComponents: [TruckSettingsDialogContainerComponent]
})
export class TruckSettingsModule { }
