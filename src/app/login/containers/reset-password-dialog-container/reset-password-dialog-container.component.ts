// Angular
import { Component } from '@angular/core';
// Module Services
import { ResetPasswordService } from '../../services/reset-password.service';

@Component({
    selector: 'app-reset-password-dialog-container',
    template: `
        <app-reset-password-dialog-form
            [error]="this.resetPasswordService.error$ | async"
            [pending]="this.resetPasswordService.pending$ | async"
            (clearError)="this.resetPasswordService.error$.next('')"
            (closResetPasswordDialog)="this.resetPasswordService.closResetPasswordDialog()"
            (sendResetPasswordEmail)="this.resetPasswordService.sendResetPasswordEmail($event)"
        ></app-reset-password-dialog-form>
    `,
    providers: [ResetPasswordService]
})
export class ResetPasswordDialogContainerComponent {
    constructor(public resetPasswordService: ResetPasswordService) { }
}
