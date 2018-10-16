// Angular
import { Component } from '@angular/core';
// Module Services
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-login-container',
    template: `
        <mat-toolbar style="height: 64px" color="primary">Daily Routes</mat-toolbar>
        <app-login-form
            [error]="this.loginService.error$ | async"
            [pending]="this.loginService.pending$ | async"
            (clearError)="this.loginService.error$.next('')"
            (openResetPasswordDialog)="this.loginService.openResetPasswordDialog()"
            (login)="this.loginService.login($event)"
        ></app-login-form>
    `,
    providers: [LoginService]
})
export class LoginContainerComponent {
    constructor(public loginService: LoginService) { }
}
