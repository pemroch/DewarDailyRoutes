// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
// Module Services
import { UserSettingsService } from './services/user-settings.service';
import { UserSettingsDialogService } from './services/user-settings-dialog.service';
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
    providers: [
        UserSettingsService,
        UserSettingsDialogService
    ]
})
export class UserSettingsModule { }
