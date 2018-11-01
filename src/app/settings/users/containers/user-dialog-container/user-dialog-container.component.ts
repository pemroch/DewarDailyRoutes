// Angular
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
// Shared Models
import { User } from '@shared/models';
// Module Services
import { UserDialogService } from '../../services/user-dialog.service';

@Component({
    selector: 'app-user-dialog-container',
    template: `
        <app-user-dialog
            [user]="this.user"
            [pending]="this.userDialogService.pending$ | async"
            [error]="this.userDialogService.error$ | async"
            (add)="this.userDialogService.add(user)"
            (save)="this.userDialogService.save(user)"
        ></app-user-dialog>
    `
})
export class UserDialogContainerComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public user: User,
        public userDialogService: UserDialogService
    ) { }
}
