// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
// Module Containers
import { RateSettingsContainerComponent } from './containers/rate-settings-container/rate-settings-container.component';
import { RateSettingsDialogContainerComponent } from './containers/rate-settings-dialog-container/rate-settings-dialog-container.component';
// Module Components
import { RateSettingsDialogComponent } from './components/rate-settings-dialog/rate-settings-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatInputModule,
        RouterModule.forChild([
            { path: '', component: RateSettingsContainerComponent },
        ]),
        SharedModule
    ],
    declarations: [
        RateSettingsContainerComponent,
        RateSettingsDialogContainerComponent,
        RateSettingsDialogComponent
    ],
    entryComponents: [RateSettingsDialogContainerComponent]
})
export class RateSettingsModule { }
