// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
// Module Containers
import { TrailerSettingsContainerComponent } from './containers/trailer-settings-container/trailer-settings-container.component';
import {
    TrailerSettingsDialogContainerComponent
} from './containers/trailer-settings-dialog-container/trailer-settings-dialog-container.component';
// Module Components
import { TrailerSettingsDialogComponent } from './components/trailer-settings-dialog/trailer-settings-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatInputModule,
        RouterModule.forChild([
            { path: '', component: TrailerSettingsContainerComponent },
        ]),
        SharedModule
    ],
    declarations: [
        TrailerSettingsContainerComponent,
        TrailerSettingsDialogContainerComponent,
        TrailerSettingsDialogComponent
    ],
    entryComponents: [TrailerSettingsDialogContainerComponent]
})
export class TrailerSettingsModule { }
