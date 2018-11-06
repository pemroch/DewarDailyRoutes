// Angular
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
// Shared Models
import { User } from '@shared/models';
// Module Services
import { UserSettingsDialogService } from '../../services/user-settings-dialog.service';

@Component({
    selector: 'app-user-settings-dialog-container',
    template: `
        <app-user-settings-dialog
            [user]="this.user"
            [pending]="this.userSettingsDialogService.pending$ | async"
            [error]="this.userSettingsDialogService.error$ | async"
            (add)="this.userSettingsDialogService.add(user)"
            (save)="this.userSettingsDialogService.save(user)"
            (deleteUser)="this.userSettingsDialogService.deleteUser(user)"
        ></app-user-settings-dialog>
    `,
    providers: [UserSettingsDialogService]
})
export class UserSettingsDialogContainerComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public user: User,
        public userSettingsDialogService: UserSettingsDialogService
    ) { }
}
