// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
// Shared Models
import { User } from '@shared/models';

@Component({
    selector: 'app-user-dialog',
    template: `
        <form #form="ngForm">
            <mat-form-field>
                <input
                    [(ngModel)]="this.user.name"
                    [disabled]="this.pending"
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
            <mat-form-field *ngIf="!user.uid">
                <input
                    [(ngModel)]="this.user.email"
                    [disabled]="this.pending"
                    type="email"
                    name="email"
                    placeholder="Email"
                    autocorrect="off"
                    autocomplete="off"
                    matInput
                    required
                />
            </mat-form-field>
            <mat-form-field *ngIf="!user.uid">
                <input
                    [(ngModel)]="this.user.password"
                    [disabled]="this.pending"
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
                <mat-checkbox
                    [(ngModel)]="this.user.isAdmin"
                    [disabled]="this.pending"
                    name="isAdmin"
                    color="primary"
                >
                    Administrator
                </mat-checkbox>
            </div>
            <p id="error" *ngIf="error">{{ error }}</p>
            <mat-dialog-actions>
                <button
                    [disabled]="this.pending"
                    [mat-dialog-close]
                    color="warn"
                    mat-button
                >
                    Cancel
                </button>
                <button
                    *ngIf="!user.uid"
                    (click)="this.add.emit()"
                    [disabled]="!form.valid || this.pending"
                    type="submit"
                    color="primary"
                    mat-button
                >
                    Add
                </button>
                <button
                    *ngIf="user.uid"
                    (click)="this.save.emit()"
                    [disabled]="!form.valid || this.pending"
                    type="submit"
                    color="primary"
                    mat-button
                >
                    Save
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
export class UserDialogComponent {
    ngForm: NgForm;

    @Input() user: User;
    @Input() pending: boolean;
    @Input() error: string;

    @Output() add = new EventEmitter();
    @Output() save = new EventEmitter();
}
