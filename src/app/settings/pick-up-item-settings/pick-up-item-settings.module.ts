// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
// Module Containers
import { PickUpItemSettingsDialogComponent } from './components/pick-up-item-settings-dialog/pick-up-item-settings-dialog.component';
import {
    PickUpItemSettingsContainerComponent
} from './containers/pick-up-item-settings-container/pick-up-item-settings-container.component';
// Module Components
import {
    PickUpItemSettingsDialogContainerComponent
} from './containers/pick-up-item-settings-dialog-container/pick-up-item-settings-dialog-container.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatInputModule,
        RouterModule.forChild([
            { path: '', component: PickUpItemSettingsContainerComponent },
        ]),
        SharedModule
    ],
    declarations: [
        PickUpItemSettingsContainerComponent,
        PickUpItemSettingsDialogContainerComponent,
        PickUpItemSettingsDialogComponent
    ],
    entryComponents: [PickUpItemSettingsDialogContainerComponent]
})
export class PickUpItemSettingsModule { }
