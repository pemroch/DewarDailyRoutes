// Angular
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login-form',
    template: `
        <mat-card>
            <form #form="ngForm" (ngSubmit)="this.login.emit(this.form)">
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
                    />
                </mat-form-field>
                <mat-form-field>
                    <input
                        [(ngModel)]="this.password"
                        [disabled]="this.pending"
                        (ngModelChange)="this.clearError.emit()"
                        type="password"
                        name="password"
                        placeholder="Password"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                        required
                    />
                </mat-form-field>
                <button
                    [disabled]="this.pending"
                    (click)="this.openResetPasswordDialog.emit()"
                    type="button"
                    mat-button
                >
                    Reset Password
                </button>
                <p class="mat-caption">{{ this.error }}</p>
                <button
                    [disabled]="this.form.invalid || this.pending"
                    id="login-btn"
                    type="submit"
                    color="primary"
                    mat-raised-button
                >
                    Login
                </button>
            </form>
        </mat-card>
    `,
    styles: [`
        :host {
            position: fixed;
            width: 100%;
            top: 64px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            background: #eee;
            height: 100%;
            display: flex;
            justify-content: center;
            place-items: center;
        }
        mat-card {
            width: 280px;
            margin: 0px 8px 64px;
        }
        form {
            text-align: right;
        }
        p {
            text-align: center;
            color: #F44336;
        }
        mat-form-field,
        #login-btn {
            width: 100%;
            margin-top: 16px;
        }
    `]
})
export class LoginFormComponent {
    email: string;
    password: string;

    @Input() error: string;
    @Input() pending: boolean;

    @Output() clearError = new EventEmitter();
    @Output() openResetPasswordDialog = new EventEmitter();
    @Output() login = new EventEmitter();

    @ViewChild('form') form: NgForm;
}
