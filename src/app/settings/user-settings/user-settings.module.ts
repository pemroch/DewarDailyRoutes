// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
// Module Containers
import { UserSettingsContainerComponent } from './containers/user-settings-container/user-settings-container.component';
import { UserSettingsDialogContainerComponent } from './containers/user-settings-dialog-container/user-settings-dialog-container.component';
// Module Components
import { UserSettingsDialogComponent } from './components/user-settings-dialog/user-settings-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatInputModule,
        RouterModule.forChild([
            { path: '', component: UserSettingsContainerComponent },
        ]),
        SharedModule
    ],
    declarations: [
        UserSettingsContainerComponent,
        UserSettingsDialogContainerComponent,
        UserSettingsDialogComponent
    ],
    entryComponents: [UserSettingsDialogContainerComponent],
})
export class UserSettingsModule { }
