import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PickUpItem, Rate } from '@shared/models';

@Component({
    selector: 'app-upload-form',
    template: `
        <form #form="ngForm">
            <p class="mat-body-1 section-header">Rate</p>
            <mat-form-field>
                <mat-select
                    [(ngModel)]="this.rate"
                    [disabled]="this.pending"
                    name="rate"
                    placeholder="Rate"
                    required
                >
                    <mat-option *ngFor="let rate of this.rates" [value]="rate">
                        {{ rate.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>

            <mat-form-field *ngIf="this.rate">
                <input
                    [(ngModel)]="this.rate.ratePerMile"
                    [disabled]="this.pending"
                    type="number"
                    name="ratePerMile"
                    placeholder="Rate Per Mile"
                    matInput
                    required
                />
            </mat-form-field>

            <mat-form-field *ngIf="this.rate">
                <input
                    [(ngModel)]="this.rate.ratePerStop"
                    [disabled]="this.pending"
                    type="number"
                    name="ratePerStop"
                    placeholder="Rate Per Stop"
                    matInput
                    required
                />
            </mat-form-field>

            <p class="mat-body-1 section-header">Pick Up Items</p>
            <ng-container *ngFor="let pickUpItem of this.pickUpItems">
                <mat-form-field>
                    <input
                        [(ngModel)]="pickUpItem.ratePerItem"
                        [disabled]="this.pending"
                        type="number"
                        name="{{ pickUpItem.id }}"
                        placeholder="{{ pickUpItem.name }}"
                        matInput
                        required
                    />
                </mat-form-field>
            </ng-container>

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
                    (change)="this.uploadRoutes.emit({ $event: $event, rate: this.rate, pickUpItems: this.pickUpItems })"
                    id="file-upload"
                    type="file"
                    name="file-upload"
                    accept="text/xml"
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
        .section-header {
            font-size: 16px;
            letter-spacing: 4px;
            color: #0097a7;
        }
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
export class UploadFormComponent {
    rate: Rate;

    @Input() rates: Rate[];
    @Input() pending: boolean;
    @Input() error: string;
    @Input() pickUpItems: PickUpItem[];

    @Output() fileInputClick = new EventEmitter();
    @Output() uploadRoutes = new EventEmitter();

    @ViewChild('form') form: NgForm;
}
