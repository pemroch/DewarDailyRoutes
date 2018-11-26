import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer, Driver, Location, PickUpItem, Rate, Trailer, Truck } from '@shared/models';

@Component({
    selector: 'app-search-form',
    template: `
        <form #form="ngForm">

            <div class="section-container">
                <p class="mat-body-1 section-header">Load</p>

                <mat-form-field>
                    <input
                        [(ngModel)]="this.searchForm.loadDateStart"
                        [matDatepicker]="loadDateStart"
                        [max]="this.searchForm.loadDateEnd"
                        type="text"
                        name="loadDateStart"
                        placeholder="Start Date"
                        readonly
                        matInput
                        required
                    />
                    <mat-datepicker-toggle matSuffix [for]="loadDateStart"></mat-datepicker-toggle>
                    <mat-datepicker #loadDateStart touchUi></mat-datepicker>
                    <span matSuffix>
                        <button
                            (click)="clearDate.emit('loadDateStart')"
                            [disabled]="this.pending || !this.searchForm.loadDateStart"
                            color="warn"
                            mat-icon-button
                        >
                            <mat-icon>clear</mat-icon>
                        </button>
                    </span>
                </mat-form-field>

                <mat-form-field>
                    <input
                        [(ngModel)]="this.searchForm.loadDateEnd"
                        [matDatepicker]="loadDateEnd"
                        [min]="this.searchForm.loadDateStart"
                        type="text"
                        name="loadDateEnd"
                        placeholder="End Date"
                        readonly
                        matInput
                        required
                    />
                    <mat-datepicker-toggle matSuffix [for]="loadDateEnd"></mat-datepicker-toggle>
                    <mat-datepicker #loadDateEnd touchUi></mat-datepicker>
                    <span matSuffix>
                        <button
                            (click)="clearDate.emit('loadDateEnd')"
                            [disabled]="this.pending || !this.searchForm.loadDateEnd"
                            color="warn"
                            mat-icon-button
                        >
                            <mat-icon>clear</mat-icon>
                        </button>
                    </span>
                </mat-form-field>

                <mat-form-field>
                    <mat-select
                        [(ngModel)]="this.searchForm.loadLocation"
                        [disabled]="this.pending"
                        class="capitalize"
                        name="loadLocation"
                        placeholder="Load Location"
                    >
                        <mat-option [value]="{ id: null }"></mat-option>
                        <mat-option *ngFor="let location of this.locations" [value]="location" class="capitalize">
                            {{ location.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <div class="section-container">
                <p class="mat-body-1 section-header">Truck & Trailer</p>

                <mat-form-field>
                    <mat-select
                        [(ngModel)]="this.searchForm.truck"
                        [disabled]="this.pending"
                        class="capitalize"
                        name="truck"
                        placeholder="Truck"
                    >
                        <mat-option [value]="{ id: null }"></mat-option>
                        <mat-option *ngFor="let truck of this.trucks" [value]="truck" class="capitalize">
                            {{ truck.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>

                <mat-form-field>
                    <mat-select
                        [(ngModel)]="this.searchForm.trailer"
                        [disabled]="this.pending"
                        class="capitalize"
                        name="trailer"
                        placeholder="Trailer"
                    >
                        <mat-option [value]="{ id: null }"></mat-option>
                        <mat-option *ngFor="let trailer of this.trailers" [value]="trailer" class="capitalize">
                            {{ trailer.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <div class="section-container">
                <p class="mat-body-1 section-header">Driver</p>

                <mat-form-field>
                    <mat-select
                        [(ngModel)]="this.searchForm.driver"
                        [disabled]="this.pending"
                        class="capitalize"
                        name="driver"
                        placeholder="Driver"
                    >
                        <mat-option [value]="{ id: null }"></mat-option>
                        <mat-option *ngFor="let driver of this.drivers" [value]="driver" class="capitalize">
                            {{ driver.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <div class="section-container">
                <p class="mat-body-1 section-header">Origin State</p>

                <mat-form-field>
                    <mat-select
                        [(ngModel)]="this.searchForm.origin"
                        [disabled]="this.pending"
                        class="capitalize"
                        name="originState"
                        placeholder="State"
                    >
                        <mat-option [value]="{ name: null }"></mat-option>
                        <mat-option *ngFor="let state of this.states" [value]="state">
                            {{ state.name }} - {{ state.abbrev }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <div class="section-container">
                <p class="mat-body-1 section-header">Destination State</p>

                <mat-form-field>
                    <mat-select
                        [(ngModel)]="this.searchForm.destination"
                        [disabled]="this.pending"
                        class="capitalize"
                        name="destinationState"
                        placeholder="State"
                    >
                        <mat-option [value]="{ name: null }"></mat-option>
                        <mat-option *ngFor="let state of this.states" [value]="state">
                            {{ state.name }} - {{ state.abbrev }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <div class="section-container">
                <p class="mat-body-1 section-header">Rate</p>

                <mat-form-field>
                    <mat-select
                        [(ngModel)]="this.searchForm.rate"
                        [disabled]="this.pending"
                        name="rateId"
                        placeholder="Rate"
                    >
                        <mat-option [value]="{ id: null }"></mat-option>
                        <mat-option *ngFor="let rate of this.rates" [value]="rate">
                            {{ rate.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <div class="section-container">
                <p class="mat-body-1 section-header">Customers</p>

                <ng-container *ngFor="let customer of this.customers; let i=index">
                    <mat-checkbox
                        [(ngModel)]="this.searchForm.customers[customer.id]"
                        [disabled]="this.pending"
                        name="{{ customer.id }}"
                        class="capitalize"
                    >
                        {{ customer.name }}
                    </mat-checkbox>
                </ng-container>
            </div>

            <div class="section-container">
                <p class="mat-body-1 section-header">Pick-Ups</p>

                <ng-container *ngFor="let pickUpItem of this.pickUpItems">
                    <mat-checkbox
                        [(ngModel)]="this.searchForm.pickUpItems[pickUpItem.id]"
                        [disabled]="this.pending"
                        name="{{ pickUpItem.id }}"
                        class="capitalize"
                    >
                        {{ pickUpItem.name }}
                    </mat-checkbox>
                </ng-container>
            </div>

            <p id="error" *ngIf="error">{{ error }}</p>

            <div id="actions-container">
                <button (click)="this.cancel.emit()" [disabled]="this.pending" color="warn" mat-button>
                    Cancel
                </button>
                <button (click)="this.search.emit()" [disabled]="!form.valid || this.pending" type="submit" color="primary" mat-button>
                    Search
                </button>
            </div>
        </form>
    `,
    styles: [`
        form {
            background: #eee;
        }
        .capitalize {
            text-transform: capitalize;
        }
        .section-header {
            font-size: 16px;
            letter-spacing: 4px;
            color: #0097a7;
        }
        .section-container {
            display: flex;
            flex-direction: column;
            padding: 0px 24px 24px;
        }
        mat-datepicker-toggle {
            color: #0097a7;
        }
        mat-checkbox {
            margin-top: 16px;
            margin-bottom: 16px;
        }
        #actions-container {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            border-top: 1px solid #ddd;
            margin-top: 24px;
            padding-top: 24px;
            padding-bottom: 24px;
        }
    `]
})

export class SearchFormComponent {
    @Input() searchForm: any;
    @Input() states: any[];
    @Input() customers: Customer[];
    @Input() drivers: Driver[];
    @Input() locations: Location[];
    @Input() pickUpItems: PickUpItem[];
    @Input() rates: Rate[];
    @Input() trailers: Trailer[];
    @Input() trucks: Truck[];

    @Output() clearDate = new EventEmitter();
    @Output() cancel = new EventEmitter();
    @Output() search = new EventEmitter();

    @ViewChild('form') form: NgForm;
}
