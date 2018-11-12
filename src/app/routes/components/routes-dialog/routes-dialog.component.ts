// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
// Shared Models
import { Customer, Location, PickUpItem, Rate, Route, Truck, Trailer } from '@shared/models';

@Component({
    selector: 'app-routes-dialog',
    template: `
        <form #form="ngForm" *ngIf="this.route">

            <p class="mat-body-1 section-header">Load</p>
            <div fxLayout.xs="column" fxLayoutGap.gt-xs="24px">
                <mat-form-field fxFlex.gt-xs="50" fxFlex.gt-md="40">
                    <input
                        [(ngModel)]="this.route.loadDate"
                        [matDatepicker]="loadDate"
                        class="route-date-picker"
                        name="loadDate"
                        placeholder="Date"
                        disabled
                        matInput
                    />
                    <mat-datepicker-toggle matSuffix [for]="loadDate"></mat-datepicker-toggle>
                    <mat-datepicker #loadDate disabled="false"></mat-datepicker>
                    <span matSuffix>
                        <button
                            (click)="clearDate.emit({ route: this.route, prop: 'loadDate' })"
                            [disabled]="this.pending || !route.loadDate"
                            color="warn"
                            mat-icon-button
                        >
                            <mat-icon>clear</mat-icon>
                        </button>
                    </span>
                </mat-form-field>

                <mat-form-field fxFlex.gt-xs="50" fxFlex.gt-md="40">
                    <mat-select
                        [(ngModel)]="this.route.loadLocation"
                        [disabled]="this.pending"
                        class="capitalize"
                        name="loadLocation"
                        placeholder="Location"
                    >
                        <mat-option [value]="null">- NONE -</mat-option>
                        <mat-option *ngFor="let location of this.locations" [value]="location.id" class="capitalize">
                            {{ location.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <p class="mat-body-1 section-header">Truck & Trailer</p>
            <div fxLayout.xs="column" fxLayoutGap.gt-xs="24px">
                <mat-form-field fxFlex.gt-xs="49" fxFlex.gt-md="40">
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
            </div>

            <div fxLayout.xs="column" fxLayoutGap.gt-xs="24px">
                <mat-form-field fxFlex.gt-xs="50" fxFlex.gt-md="40">
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

                <mat-form-field fxFlex.gt-xs="50" fxFlex.gt-md="40">
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

            <p class="mat-body-1 section-header">Driver</p>
            <div fxLayout.xs="column" fxLayoutGap.gt-xs="24px">
                <mat-form-field fxFlex.gt-xs="50" fxFlex.gt-md="40">
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

                <mat-form-field fxFlex.gt-xs="50" fxFlex.gt-md="40">
                    <input
                        [(ngModel)]="this.route.driverEta"
                        [matDatepicker]="driverEta"
                        class="route-date-picker"
                        name="driverEta"
                        placeholder="ETA"
                        disabled
                        matInput
                    />
                    <mat-datepicker-toggle matSuffix [for]="driverEta"></mat-datepicker-toggle>
                    <mat-datepicker #driverEta disabled="false"></mat-datepicker>
                    <span matSuffix>
                        <button
                            (click)="clearDate.emit({ route: this.route, prop: 'driverEta' })"
                            [disabled]="this.pending || !route.driverEta"
                            color="warn"
                            mat-icon-button
                        >
                            <mat-icon>clear</mat-icon>
                        </button>
                    </span>
                </mat-form-field>
            </div>

            <p class="mat-body-1 section-header">Origin</p>
            <div fxLayout.xs="column" fxLayoutGap.gt-xs="24px">
                <mat-form-field fxFlex.gt-xs="50" fxFlex.gt-md="40">
                    <input
                        [(ngModel)]="this.route.origin.city"
                        [disabled]="this.pending"
                        class="capitalize"
                        type="text"
                        name="originCity"
                        placeholder="City"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                </mat-form-field>

                <mat-form-field fxFlex.gt-xs="50" fxFlex.gt-md="40">
                    <mat-select
                        [(ngModel)]="this.route.origin.state"
                        [disabled]="this.pending"
                        class="capitalize"
                        name="originState"
                        placeholder="State"
                    >
                        <mat-option [value]="null">- NONE -</mat-option>
                        <mat-option *ngFor="let state of this.states" [value]="state.abbrev">
                            {{ state.name }} - {{ state.abbrev }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <p class="mat-body-1 section-header">Destination</p>
            <div fxLayout.xs="column" fxLayoutGap.gt-xs="24px">
                <mat-form-field fxFlex.gt-xs="50" fxFlex.gt-md="40">
                    <input
                        [(ngModel)]="this.route.destination.city"
                        [disabled]="this.pending"
                        class="capitalize"
                        type="text"
                        name="destinationCity"
                        placeholder="City"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                </mat-form-field>

                <mat-form-field fxFlex.gt-xs="50" fxFlex.gt-md="40">
                    <mat-select
                        [(ngModel)]="this.route.destination.state"
                        [disabled]="this.pending"
                        name="destinationState"
                        placeholder="State"
                    >
                        <mat-option [value]="null">- NONE -</mat-option>
                        <mat-option *ngFor="let state of this.states" [value]="state.abbrev">
                            {{ state.name }} - {{ state.abbrev }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <p class="mat-body-1 section-header">Rate</p>
            <div fxLayout.xs="column" fxLayoutGap.gt-xs="24px">
                <mat-form-field fxFlex.gt-xs="49" fxFlex.gt-md="40">
                    <mat-select
                        [(ngModel)]="this.route.rate"
                        (ngModelChange)="this.setStops.emit(this.route)"
                        [compareWith]="this.compareWith"
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
            </div>

            <p class="mat-body-1 section-header">Rate Per Mile</p>
            <div fxLayout.xs="column" fxLayoutGap.gt-xs="24px">
                <mat-form-field fxFlex.gt-xs="50" fxFlex.gt-md="40">
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

                <mat-form-field fxFlex.gt-xs="50" fxFlex.gt-md="40">
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
            </div>

            <p class="mat-body-1 section-header">Rate Per Stop</p>
            <div fxLayout.xs="column" fxLayoutAlign.gt-xs="start center" fxLayoutGap.gt-xs="24px">
                <mat-form-field fxFlex.gt-xs="49" fxFlex.gt-md="40">
                    <input
                        [(ngModel)]="this.route.rate.ratePerStop"
                        (keyup)="this.ratePerStopKeyup.emit(this.route)"
                        [disabled]="this.pending"
                        type="number"
                        name="ratePerStop"
                        placeholder="Rate"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                </mat-form-field>

                <span id="no-of-stops" fxFlex.gt-xs="10" fxFlex.gt-md="6">Stops: {{ this.route.noOfStops }}</span>
                <mat-slider
                    [(ngModel)]="this.route.noOfStops"
                    (change)="this.setStops.emit(this.route)"
                    [disabled]="this.pending"
                    fxFlex.gt-xs="41" fxFlex.gt-md="33"
                    name="noOfStops"
                    tickInterval="1"
                    min="0"
                    max="100"
                    thumbLabel
                ></mat-slider>
            </div>


            <div
                *ngIf="this.route.ratePerStopEach?.length"
                id="rate-per-stop-each-container"
                fxLayout="column"
            >
                <mat-form-field
                    *ngFor="let stop of this.route.ratePerStopEach; let i=index; trackBy: trackByFn"
                    fxFlex.gt-xs="50"
                    fxFlex.gt-md="40"
                >
                    <input
                        [(ngModel)]="this.route.ratePerStopEach[i]"
                        (keyup)="this.ratePerStopEachKeyup.emit({
                            route: this.route,
                            index: i
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
            </div>

            <p class="mat-body-1 section-header">Ref. #</p>
            <div fxLayout.xs="column" fxLayoutGap.gt-xs="24px">
                <mat-form-field fxFlex.gt-xs="33">
                    <input
                        [(ngModel)]="this.route.refNumber1"
                        [disabled]="this.pending"
                        type="text"
                        name="refNumber1"
                        placeholder="Ref. #1"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                </mat-form-field>

                <mat-form-field fxFlex.gt-xs="33">
                    <input
                        [(ngModel)]="this.route.refNumber2"
                        [disabled]="this.pending"
                        type="text"
                        name="refNumber2"
                        placeholder="Ref. #2"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                </mat-form-field>

                <mat-form-field fxFlex.gt-xs="33">
                    <input
                        [(ngModel)]="this.route.refNumber3"
                        [disabled]="this.pending"
                        type="text"
                        name="refNumber3"
                        placeholder="Ref. #3"
                        autocorrect="off"
                        autocomplete="off"
                        matInput
                    />
                </mat-form-field>
            </div>

            <p class="mat-body-1 section-header">Comments</p>
            <div *ngFor="let comment of this.route.comments" class="comment-container">
                <p>{{ comment.text }}</p>
                <div class="mat-caption">{{ comment.email }}</div>
                <div class="mat-caption">{{ comment.date | date: 'MM/dd/yy' }}</div>
            </div>

            <div fxLayout.xs="column">
                <mat-form-field fxFlex.gt-xs="50" fxFlex.gt-md="40">
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

            <p class="mat-body-1 section-header">Confirmation</p>
            <mat-checkbox
                [(ngModel)]="this.route.confirmation.confirmed"
                [disabled]="this.pending"
                name="confirmation"
            >
                Confirm
            </mat-checkbox>
            <div>{{ this.route.confirmation.email }}</div>
            <div>{{ this.route.confirmation.date | date: 'MM/dd/yy' }}</div>

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
        mat-slider {
            margin-top: 16px;
        }
        .comment-container {
            border-bottom: 1px solid #ddd;
            margin-bottom: 16px;
            padding-bottom: 16px;
        }
        #error {
            color: #f44336;
        }
        #no-of-stops {
            padding-left: 8px;
        }
        #rate-per-stop-each-container {
            background: #eee;
            max-height: 200px;
            border-bottom: #ddd;
            margin-bottom: 16px;
            overflow: auto;
            padding: 16px 0px 0px 16px;
            margin-top: 36px;
        }
        .route-date-picker {
            color: black;
        }
        .section-header {
            font-size: 16px;
            letter-spacing: 4px;
            color: #0097a7;
            padding-top: 24px;
        }
        mat-dialog-actions {
            justify-content: flex-end;
        }
    `]
})
export class RoutesDialogComponent {
    addComment: string;
    ngForm: NgForm;

    @Input() states: string[];

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
    @Output() ratePerStopKeyup = new EventEmitter();
    @Output() ratePerStopEachKeyup = new EventEmitter();
}
