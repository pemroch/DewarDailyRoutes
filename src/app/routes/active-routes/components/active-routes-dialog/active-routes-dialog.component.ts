// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
// Shared Models
import { PickUp, Rate, Route, RouteNumber, Truck, Trailer } from '@shared/models';

@Component({
    selector: 'app-active-routes-dialog',
    template: `
        <form #form="ngForm">
            <p class="mat-body-1 section-header">Rate</p>
            <div class="flex-2-container">
                <mat-form-field class="flex-item">
                    <mat-select
                        [(ngModel)]="this.route.rate"
                        [disabled]="this.pending"
                        name="rate"
                        placeholder="Rate"
                    >
                        <mat-option *ngFor="let rate of this.rates" [value]="rate">
                            {{ rate.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
                <mat-form-field class="flex-item">
                    <input
                        [(ngModel)]="this.route.rate.ratePerMile"
                        [disabled]="this.pending"
                        type="number"
                        name="ratePerMile"
                        placeholder="Rate/Mile"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                </mat-form-field>
            </div>

            <p class="mat-body-1 section-header">Truck-Trailer-Driver-Temp.</p>
            <div class="flex-2-container">
                <mat-form-field class="flex-item">
                    <mat-select
                        [(ngModel)]="this.route.truck"
                        [disabled]="this.pending"
                        name="truck"
                        placeholder="Truck"
                    >
                        <mat-option *ngFor="let truck of this.trucks" [value]="truck">
                            {{ truck.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>

                <mat-form-field class="flex-item">
                    <mat-select
                        [(ngModel)]="this.route.trailer"
                        [disabled]="this.pending"
                        name="trailer"
                        placeholder="Trailer"
                    >
                        <mat-option *ngFor="let trailer of this.trailers" [value]="trailer">
                            {{ trailer.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <div class="flex-2-container">
                <mat-form-field class="flex-item">
                    <mat-select
                        [(ngModel)]="this.route.driver"
                        [disabled]="this.pending"
                        class="capitalize"
                        name="driver"
                        placeholder="Driver"
                    >
                        <mat-option *ngFor="let driver of this.drivers" [value]="driver" class="capitalize">
                            {{ driver.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>

                <mat-form-field class="flex-item">
                    <input
                        [(ngModel)]="this.route.temp"
                        [disabled]="this.pending"
                        type="number"
                        name="temp"
                        placeholder="Temp."
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                    <span matSuffix>˚F</span>
                </mat-form-field>
            </div>

            <p class="mat-body-1 section-header">Load Date-Origin-Destination</p>
            <mat-form-field id="load-date">
                <input
                    [(ngModel)]="this.route.loadDate"
                    [matDatepicker]="loadDate"
                    class="route-date-picker"
                    name="loadDate"
                    placeholder="Load Date"
                    disabled
                    matInput
                />
                <mat-datepicker-toggle matSuffix [for]="loadDate"></mat-datepicker-toggle>
                <mat-datepicker #loadDate disabled="false"></mat-datepicker>
                <span matSuffix>
                    <button (click)="clearDate.emit()" [disabled]="this.pending || !route.loadDate" color="warn" mat-icon-button>
                        <mat-icon>clear</mat-icon>
                    </button>
                </span>
            </mat-form-field>
            <div class="flex-2-container">
                <mat-form-field class="flex-item">
                    <input
                        [(ngModel)]="this.route.origin.city"
                        [disabled]="this.pending"
                        class="capitalize"
                        type="text"
                        name="originCity"
                        placeholder="Origin City"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                </mat-form-field>
                <mat-form-field class="flex-item">
                    <mat-select
                        [(ngModel)]="this.route.origin.state"
                        [disabled]="this.pending"
                        class="capitalize"
                        name="originState"
                        placeholder="Origin State"
                    >
                        <mat-option *ngFor="let state of this.states" [value]="state.abbrev" class="capitalize">
                            {{ state.name }} -
                            <span class="uppercase">{{ state.abbrev }}</span>
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <div class="flex-2-container">
                <mat-form-field class="flex-item">
                    <input
                        [(ngModel)]="this.route.destination.city"
                        [disabled]="this.pending"
                        class="capitalize"
                        type="text"
                        name="destinationCity"
                        placeholder="Destination City"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                </mat-form-field>
                <mat-form-field class="flex-item">
                    <mat-select
                        [(ngModel)]="this.route.destination.state"
                        [disabled]="this.pending"
                        class="capitalize"
                        name="destinationState"
                        placeholder="Destination State"
                    >
                        <mat-option *ngFor="let state of this.states" [value]="state.abbrev" class="capitalize">
                            {{ state.name }} -
                            <span class="uppercase">{{ state.abbrev }}</span>
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <p class="mat-body-1 section-header">Miles-Stops</p>
            <div class="flex-2-container">
                <mat-form-field class="flex-item">
                    <input
                        [(ngModel)]="this.route.miles"
                        [disabled]="this.pending"
                        type="number"
                        name="miles"
                        placeholder="Miles"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                </mat-form-field>

                <mat-form-field class="flex-item">
                    <input
                        [(ngModel)]="this.route.noOfStops"
                        [disabled]="this.pending"
                        type="number"
                        name="noOfStops"
                        placeholder="No. of Stop"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                </mat-form-field>
            </div>

            <p class="mat-body-1 section-header">Pick-ups</p>
            <ng-container *ngFor="let pickup of pickUps">
                <mat-checkbox
                    [(ngModel)]="this.route.pickUps[pickup.id]"
                    [disabled]="this.pending"
                    name="confirmation"
                >
                    {{ pickup.name }}
                </mat-checkbox>
            </ng-container>

            <p class="mat-body-1 section-header">Reference Numbers</p>
            <div class="flex-3-container">
                <mat-form-field class="flex-item">
                    <input
                        [(ngModel)]="this.route.refNumber1"
                        [disabled]="this.pending"
                        type="text"
                        name="refNumber1"
                        placeholder="Ref. No. 1"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                </mat-form-field>

                <mat-form-field class="flex-item">
                    <input
                        [(ngModel)]="this.route.refNumber2"
                        [disabled]="this.pending"
                        type="text"
                        name="refNumber2"
                        placeholder="Ref. No. 2"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                </mat-form-field>

                <mat-form-field class="flex-item">
                    <input
                        [(ngModel)]="this.route.refNumber3"
                        [disabled]="this.pending"
                        type="text"
                        name="refNumber3"
                        placeholder="Ref. No. 3"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                </mat-form-field>
            </div>

            <p class="mat-body-1 section-header">Comments</p>
            <div *ngFor="let comment of this.route.comments" class="comment-container">
                <p>{{ comment.text }}</p>
                <span class="mat-caption">{{ comment.user.name }}</span>
            </div>

            <mat-form-field>
                <textarea
                    [(ngModel)]="this.addComment"
                    [disabled]="this.pending"
                    name="addComment"
                    placeholder="Add Comment"
                    autocorrect="off"
                    autocomplete="off"
                    matInput
                ></textarea>
            </mat-form-field>

            <p id="error" *ngIf="error">{{ error }}</p>

            <mat-dialog-actions>
                <mat-checkbox [(ngModel)]="this.route.confirmation" [disabled]="this.pending" name="confirmation">Confirm</mat-checkbox>

                <div id="action-btn-container">
                    <button
                        [disabled]="this.pending"
                        [mat-dialog-close]
                        color="warn"
                        mat-button
                    >
                        Cancel
                    </button>
                    <button
                        *ngIf="!route.uid"
                        (click)="this.add.emit(addComment)"
                        [disabled]="!form.valid || this.pending"
                        type="submit"
                        color="primary"
                        mat-button
                    >
                        Add
                    </button>
                    <button
                        *ngIf="route.uid"
                        (click)="this.save.emit(addComment)"
                        [disabled]="!form.valid || this.pending"
                        type="submit"
                        color="primary"
                        mat-button
                    >
                        Save
                    </button>
                </div>
            </mat-dialog-actions>
        </form>
    `,
    styles: [`
        form {
            display: flex;
            flex-direction: column;
        }
        mat-checkbox {
            margin-top: 16px;
            margin-bottom: 16px;
        }
        .capitalize {
            text-transform: capitalize;
        }
        .uppercase {
            text-transform: uppercase;
        }
        .comment-container {
            border-bottom: 1px solid #ddd;
        }
        #error {
            color: #f44336;
        }
        .route-date-picker {
            color: black;
        }
        .section-header {
            font-size: 16px;
            letter-spacing: 4px;
            color: #0097a7;
        }
        .flex-2-container,
        .flex-3-container {
            display: flex;
            justify-content: space-between;
        }
        #load-date,
        .flex-2-container > .flex-item {
            width: 48%;
        }
        .flex-3-container > .flex-item {
            width: 32%;
        }
        mat-dialog-actions {
            justify-content: space-between;
        }
    `]
})
export class ActiveRoutesDialogComponent {
    addComment: string;
    ngForm: NgForm;

    @Input() pending: boolean;
    @Input() error: string;
    @Input() route: Route;
    @Input() rates: Rate[];
    @Input() routeNumber: RouteNumber;
    @Input() trucks: Truck[];
    @Input() trailers: Trailer[];
    @Input() drivers: Trailer[];
    @Input() pickUps: PickUp[];
    @Input() states: string[];

    @Output() add = new EventEmitter();
    @Output() save = new EventEmitter();
    @Output() clearDate = new EventEmitter();
}