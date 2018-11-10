// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
// Shared Models
import { Customer, Location, PickUpItem, Rate, Route, Truck, Trailer } from '@shared/models';

@Component({
    selector: 'app-routes-dialog',
    template: `
        <form #form="ngForm" *ngIf="this.route">
            <p class="mat-body-1 section-header">Load Date-Load Location</p>
            <div class="flex-2-container">
                <mat-form-field class="flex-item">
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
                        <button
                            (click)="clearDate.emit(this.route)"
                            [disabled]="this.pending || !route.loadDate"
                            color="warn"
                            mat-icon-button
                        >
                            <mat-icon>clear</mat-icon>
                        </button>
                    </span>
                </mat-form-field>

                <mat-form-field class="flex-item">
                    <mat-select
                        [(ngModel)]="this.route.loadLocation"
                        [disabled]="this.pending"
                        class="capitalize"
                        name="loadLocation"
                        placeholder="Load Location"
                    >
                        <mat-option [value]="null">- NONE -</mat-option>
                        <mat-option *ngFor="let location of this.locations" [value]="location.id" class="capitalize">
                            {{ location.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <p class="mat-body-1 section-header">Truck-Trailer-Driver-Temp.</p>
            <mat-form-field class="flex-48">
                <mat-select
                    [(ngModel)]="this.route.truck"
                    [disabled]="this.pending"
                    name="truck"
                    placeholder="Truck"
                >
                    <mat-option [value]="null">- NONE -</mat-option>
                    <mat-option *ngFor="let truck of this.trucks" [value]="truck.id">
                        {{ truck.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>

            <div class="flex-2-container">
                <mat-form-field class="flex-item">
                    <mat-select
                        [(ngModel)]="this.route.trailer"
                        [disabled]="this.pending"
                        name="trailer"
                        placeholder="Trailer"
                    >
                        <mat-option [value]="null">- NONE -</mat-option>
                        <mat-option *ngFor="let trailer of this.trailers" [value]="trailer.id">
                            {{ trailer.name }}
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

            <div class="flex-2-container">
                <mat-form-field class="flex-item">
                    <mat-select
                        [(ngModel)]="this.route.driver"
                        [disabled]="this.pending"
                        class="capitalize"
                        name="driver"
                        placeholder="Driver"
                    >
                        <mat-option [value]="null">- NONE -</mat-option>
                        <mat-option *ngFor="let driver of this.drivers" [value]="driver.id" class="capitalize">
                            {{ driver.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>

                <mat-form-field class="flex-item">
                    <input
                        [(ngModel)]="this.route.driverEta"
                        [matDatepicker]="driverEta"
                        class="route-date-picker"
                        name="driverEta"
                        placeholder="Driver ETA"
                        disabled
                        matInput
                    />
                    <mat-datepicker-toggle matSuffix [for]="driverEta"></mat-datepicker-toggle>
                    <mat-datepicker #driverEta disabled="false"></mat-datepicker>
                    <span matSuffix>
                        <button
                            (click)="clearDate.emit(this.route)"
                            [disabled]="this.pending || !route.driverEta"
                            color="warn"
                            mat-icon-button
                        >
                            <mat-icon>clear</mat-icon>
                        </button>
                    </span>
                </mat-form-field>
            </div>

            <p class="mat-body-1 section-header">Origin-Destination</p>
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
                        <mat-option [value]="null">- NONE -</mat-option>
                        <mat-option *ngFor="let state of this.states" [value]="state.abbrev">
                            {{ state.name }} - {{ state.abbrev }}
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
                        [value]="'hello'"
                        name="destinationState"
                        placeholder="Destination State"
                    >
                        <mat-option [value]="null">- NONE -</mat-option>
                        <mat-option *ngFor="let state of this.states" [value]="state.abbrev">
                            {{ state.name }} - {{ state.abbrev }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <p class="mat-body-1 section-header">Rate-Miles-Stops</p>
            <div class="flex-2-container">
                <mat-form-field class="flex-item">
                    <mat-select
                        [(ngModel)]="this.route.rate"
                        [compareWith]="this.compareWith"
                        [disabled]="this.pending"
                        name="rate"
                        placeholder="Rate"
                    >
                        <mat-option [value]="null">- NONE -</mat-option>
                        <mat-option *ngFor="let rate of this.rates" [value]="rate">
                            {{ rate.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
                <mat-form-field *ngIf="this.route.rate && this.route.rate.id" class="flex-item">
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
                        #noOfStopsRef
                        [(ngModel)]="this.route.noOfStops"
                        (ngModelChange)="this.setStops.emit({
                            route: this.route,
                            noOfStops: noOfStopsRef.value,
                            ratePerDrop: this.ratePerDropAll
                        })"
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

            <div class="flex-2-container">
                <mat-form-field class="flex-item">
                    <input
                        #ratePerDropRef
                        [(ngModel)]="this.ratePerDropAll"
                        (keyup)="this.ratePerDropAllKeyup.emit({ route: this.route, ratePerDrop: ratePerDropRef.value})"
                        [disabled]="this.pending"
                        type="number"
                        name="ratePerDrop"
                        placeholder="Rate/Drop (All)"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                </mat-form-field>

                <mat-expansion-panel id="active-route-dialog-panel" class="flex-item">
                    <mat-expansion-panel-header>
                        <mat-panel-title>Rate/Drop (Each)</mat-panel-title>
                    </mat-expansion-panel-header>
                    <ng-container *ngFor="let stop of this.route.ratePerDrop; let i=index; trackBy: trackByFn">
                        <mat-form-field class="flex-100">
                            <input
                                #ratePerDropEach
                                [(ngModel)]="this.route.ratePerDrop[i]"
                                (keyup)="this.ratePerDropEachKeyup.emit({
                                    route: this.route,
                                    index: i,
                                    value: ratePerDropEach.value
                                })"
                                [disabled]="this.pending"
                                placeholder="Stop {{ i + 1 }}"
                                name="{{ i }}"
                                type="number"
                                autocorrect="off"
                                autocomplete="off"
                                matInput
                            />
                        </mat-form-field>
                    </ng-container>
                </mat-expansion-panel>
            </div>

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

            <p class="mat-body-1 section-header">Customers</p>
            <ng-container *ngFor="let customer of customers; let i=index">
                <mat-checkbox
                    (change)="this.checkBoxChanged.emit({ array: this.route.customers, value: customer.id })"
                    [checked]="this.route.customers.indexOf(customer.id) >= 0"
                    [disabled]="this.pending"
                    name="{{ customer.id }}"
                    class="capitalize"
                >
                    {{ customer.name }}
                </mat-checkbox>
            </ng-container>

            <p class="mat-body-1 section-header">Pick-Ups</p>
            <ng-container *ngFor="let pickUpItem of pickUpItems">
                <mat-checkbox
                    (change)="this.checkBoxChanged.emit({ array: this.route.pickUpItems, value: pickUpItem.id })"
                    [checked]="this.route.pickUpItems.indexOf(pickUpItem.id) >= 0"
                    [disabled]="this.pending"
                    name="{{ pickUpItem.id }}"
                    class="capitalize"
                >
                    {{ pickUpItem.name }}
                </mat-checkbox>
            </ng-container>

            <p class="mat-body-1 section-header">Comments</p>
            <div *ngFor="let comment of this.route.comments" class="comment-container">
                <p>{{ comment.text }}</p>
                <div class="mat-caption">{{ comment.email }}</div>
                <div class="mat-caption">{{ comment.date | date: 'MM/dd/yy' }}</div>
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
                <div>
                    <mat-checkbox
                        [(ngModel)]="this.route.confirmation.confirmed"
                        [disabled]="this.pending"
                        name="confirmation"
                    >
                        Confirm
                    </mat-checkbox>
                    <div>{{ this.route.confirmation.email }}</div>
                    <div>{{ this.route.confirmation.date | date: 'MM/dd/yy' }}</div>
                </div>

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
                        *ngIf="!route.id"
                        (click)="this.add.emit({ route: this.route, comment: addComment })"
                        [disabled]="!form.valid || this.pending"
                        type="submit"
                        color="primary"
                        mat-button
                    >
                        Add
                    </button>
                    <button
                        *ngIf="route.id"
                        (click)="this.save.emit({ route: this.route, comment: addComment})"
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
        .comment-container {
            border-bottom: 1px solid #ddd;
            margin-bottom: 16px;
            padding-bottom: 16px;
        }
        #error {
            color: #f44336;
        }
        mat-expansion-panel {
            box-shadow: none !important;
            border-bottom: 1px solid #aaa;
            border-bottom: none;
        }
        mat-expansion-panel-header {
            padding-left: 0px;
            border-bottom: 1px solid rgb(170, 170, 170);
            height: 44px !important;
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
        .flex-100 {
            width: 100%;
        }
        .flex-48,
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
export class RoutesDialogComponent {
    addComment: string;
    ngForm: NgForm;

    @Input() states: string[];
    @Input() ratePerDropAll: number[];

    @Input() pending: boolean;
    @Input() error: string;
    @Input() route: Route;
    @Input() drivers: Trailer[];
    @Input() trucks: Truck[];
    @Input() trailers: Trailer[];
    @Input() rates: Rate[];
    @Input() locations: Location[];
    @Input() customers: Customer[];
    @Input() pickUpItems: PickUpItem[];

    @Input() trackByFn: any;
    @Input() compareWith: any;

    @Output() add = new EventEmitter();
    @Output() save = new EventEmitter();
    @Output() clearDate = new EventEmitter();
    @Output() checkBoxChanged = new EventEmitter();
    @Output() setStops = new EventEmitter();
    @Output() ratePerDropAllKeyup = new EventEmitter();
    @Output() ratePerDropEachKeyup = new EventEmitter();
}
