// Angular
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-add-user-dialog',
    template: `
        <form #form="ngForm">
            <mat-form-field>
                <input
                    [(ngModel)]="this.name"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="User's Name"
                    autocorrect="off"
                    autocomplete="off"
                    matInput
                    required
                />
            </mat-form-field>
            <mat-form-field>
                <input
                    [(ngModel)]="this.email"
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
                    type="text"
                    name="password"
                    placeholder="Password"
                    autocorrect="off"
                    autocomplete="off"
                    matInput
                    required
                >
            </mat-form-field>
            <div class="checkbox">
                <mat-checkbox [(ngModel)]="this.isAdmin" name="isAdmin" color="primary">Administrator</mat-checkbox>
            </div>
            <p id="error" *ngIf="error">{{ error }}</p>
            <mat-dialog-actions>
                <button [mat-dialog-close] color="warn" mat-button>Cancel</button>
                <button
                    (click)="createUser.emit(form)"
                    [disabled]="!form.valid || loading"
                    type="submit"
                    color="primary"
                    mat-button
                >
                    Add
                </button>
            </mat-dialog-actions>
        </form>
    `,
    styles: [`
        form {
            display: flex;
            flex-direction: column;
        }
        .checkbox {
            margin-top: 16px;
            margin-bottom: 16px;
        }
        #name {
            text-transform: capitalize;
        }
        #error {
            color: #f44336;
        }
    `]
})
export class AddUserDialogComponent {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    ngForm: NgForm;

    @Input() loading: boolean;
    @Input() error: string;
}
