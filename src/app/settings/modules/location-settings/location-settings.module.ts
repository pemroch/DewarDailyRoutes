// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
// Module Containers
import { LocationSettingsContainerComponent } from './containers/location-settings-container/location-settings-container.component';
import {
    LocationSettingsDialogContainerComponent
} from './containers/location-settings-dialog-container/location-settings-dialog-container.component';
// Module Components
import { LocationSettingsDialogComponent } from './components/location-settings-dialog/location-settings-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatInputModule,
        RouterModule.forChild([
            { path: '', component: LocationSettingsContainerComponent },
        ]),
        SharedModule
    ],
    declarations: [
        LocationSettingsContainerComponent,
        LocationSettingsDialogContainerComponent,
        LocationSettingsDialogComponent
    ],
    entryComponents: [LocationSettingsDialogContainerComponent]
})
export class LocationSettingsModule { }
