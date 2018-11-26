import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { PickUpItemSettingsComponent } from './pick-up-item-settings.component';
import { PickUpItemSettingsDialogComponent } from './up-item-settings-dialog.component';

import { PickUpItemDialogFormComponent } from './components/pick-up-item-dialog-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatInputModule,
        RouterModule.forChild([
            { path: '', component: PickUpItemSettingsComponent },
        ]),
        SharedModule
    ],
    declarations: [
        PickUpItemSettingsComponent,
        PickUpItemSettingsDialogComponent,
        PickUpItemDialogFormComponent
    ],
    entryComponents: [PickUpItemSettingsDialogComponent]
})
export class PickUpItemSettingsModule { }
