// Angular
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-reset-password-dialog-form',
    template: `
        <form #form="ngForm" (ngSubmit)="this.sendResetPasswordEmail.emit(this.form)">
            <mat-form-field>
                <input
                    [(ngModel)]="this.email"
                    [disabled]="this.pending"
                    (ngModelChange)="this.clearError.emit()"
                    type="email"
                    name="email"
                    placeholder="Email"
                    autocorrect="off"
                    autocomplete="off"
                    matInput
                    required
                >
            </mat-form-field>
            <p class="mat-caption">{{ this.error }}</p>
            <div id="btn-container">
                <button
                    (click)="this.closResetPasswordDialog.emit()"
                    [disabled]="this.pending"
                    type="button"
                    mat-button
                >
                    Cancel
                </button>
                <button
                    [disabled]="this.form.invalid || this.pending"
                    type="submit"
                    color="primary"
                    mat-button
                >
                    Send Reset Email
                </button>
            </div>
        </form>
    `,
    styles: [`
        mat-form-field {
            width: 100%;
        }
        p {
            text-align: center;
            color: #F44336;
        }
        .btn-container {
            display: flex;
            flex-direction: row-reverse;
            margin-top: 16px;
        }
    `]
})
export class ResetPasswordDialogFormComponent {
    email: string;

    @Input() error: string;
    @Input() pending: boolean;

    @Output() clearError = new EventEmitter();
    @Output() closResetPasswordDialog = new EventEmitter();
    @Output() sendResetPasswordEmail = new EventEmitter();

    @ViewChild('form') form: NgForm;
}
