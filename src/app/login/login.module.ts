// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Module Containers
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import {
    ResetPasswordDialogContainerComponent
} from './containers/reset-password-dialog-container/reset-password-dialog-container.component';
// Module Components
import { ConfirmationSnakbarComponent } from './components/confirmation-snakbar/confirmation-snakbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ResetPasswordDialogFormComponent } from './components/reset-password-dialog-form/reset-password-dialog-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatSnackBarModule,
        MatToolbarModule,
        RouterModule.forChild([
            { path: '', component: LoginContainerComponent }
        ])
    ],
    declarations: [
        ConfirmationSnakbarComponent,
        LoginContainerComponent,
        LoginFormComponent,
        ResetPasswordDialogContainerComponent,
        ResetPasswordDialogFormComponent
    ],
    entryComponents: [
        ConfirmationSnakbarComponent,
        ResetPasswordDialogContainerComponent
    ]
})
export class LoginModule { }
