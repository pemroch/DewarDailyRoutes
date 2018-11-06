// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
// Shared Models
import { PickUpItem } from '@shared/models';

@Component({
    selector: 'app-pick-up-item-settings-dialog',
    template: `
        <form #form="ngForm">
            <mat-form-field>
                <input
                    [(ngModel)]="this.pickUpItem.name"
                    [disabled]="this.pending"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Pick Up Item Name"
                    autocorrect="off"
                    autocomplete="off"
                    matInput
                    required
                />
            </mat-form-field>
            <mat-checkbox
                [(ngModel)]="this.pickUpItem.isActive"
                [disabled]="this.pending"
                name="isActive"
                color="primary"
            >
                Active
            </mat-checkbox>
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
                    *ngIf="!pickUpItem.id"
                    (click)="this.add.emit()"
                    [disabled]="!form.valid || this.pending"
                    type="submit"
                    color="primary"
                    mat-button
                >
                    Add
                </button>
                <button
                    *ngIf="pickUpItem.id"
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
        #name {
            text-transform: capitalize;
        }
        #error {
            color: #f44336;
        }
    `]
})
export class PickUpItemSettingsDialogComponent {
    ngForm: NgForm;

    @Input() pickUpItem: PickUpItem;
    @Input() pending: boolean;
    @Input() error: string;

    @Output() add = new EventEmitter();
    @Output() save = new EventEmitter();
}
