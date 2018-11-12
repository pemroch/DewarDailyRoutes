// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
// Shared Models
import { Rate } from '@shared/models';

@Component({
    selector: 'app-upload-routes-dialog',
    template: `
        <form #form="ngForm">
            <mat-form-field>
                <mat-select
                    [(ngModel)]="this.rate"
                    [disabled]="this.pending"
                    name="rate"
                    placeholder="Rate"
                >
                    <mat-option [value]="{ id: null, name: null, ratePerMile: null, ratePerStop: null }">- NONE -</mat-option>
                    <mat-option *ngFor="let rate of this.rates" [value]="rate">
                        {{ rate.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>

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

                <input
                    #fileInput
                    [(ngModel)]="this.file"
                    (change)="this.uploadRoutes.emit({ $event: $event, rate: this.rate })"
                    id="file-upload"
                    type="file"
                    name="file-upload"
                />

                <button
                    (click)="this.fileInputClick.emit(fileInput)"
                    [disabled]="!form.valid || this.pending"
                    type="submit"
                    color="primary"
                    mat-button
                >
                    Add File
                </button>
            </mat-dialog-actions>
        </form>
    `,
    styles: [`
        mat-form-field {
            width: 100%;
        }
        #file-upload {
            opacity: 0;
            width: 0px;
        }
        mat-dialog-actions {
            justify-content: flex-end;
            margin-top: 24px;
        }
    `]
})
export class UploadRoutesDialogComponent {
    rate: Rate = { id: null, name: null, ratePerMile: null, ratePerStop: null };
    ngForm: NgForm;

    @Input() rates: Rate[];
    @Input() pending: boolean;
    @Input() error: string;
    @Output() fileInputClick = new EventEmitter();
    @Output() uploadRoutes = new EventEmitter();
}
