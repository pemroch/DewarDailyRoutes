// Angular
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
// Shared Models
import { Driver, Truck, Trailer, Location, Customer, PickUpItem } from '@shared/models';

@Component({
    selector: 'app-table',
    template: `
        <div *ngIf="this.dataSource.data?.length" id="container">
            <mat-table #table [dataSource]="this.dataSource" matSort>

                <ng-container matColumnDef="rate">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Rate </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.rate.name }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="month">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Month </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.month }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="routeNumber">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Route No. </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.routeNumber }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="loadDate">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Load Date </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.loadDate | date: 'MM/dd/yy' }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="loadLocation">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Load Location </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div class="capitalize">
                            {{ route.loadLocation.name }}
                        </div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="customers">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Customers </mat-header-cell>
                    <mat-cell *matCellDef="let route" class="block" mat-cell>
                        <ng-container *ngFor="let customer of route.customers">
                            <div class="capitalize">{{ customer.name }}</div>
                        </ng-container>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="truck">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Truck </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.truck.name }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="trailer">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Trailer </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.trailer.name }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="driver">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Driver </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div class="capitalize">{{ route.driver.name }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="driverEta">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Driver ETA </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.driverEta | date: 'MM/dd/yy' }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="temp">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Temp. </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.temp }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="origin">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Origin </mat-header-cell>
                    <mat-cell *matCellDef="let route" class="block" mat-cell>
                        <div class="capitalize">{{ route.origin.city }}<span *ngIf="route.origin.city">,</span></div>
                        <div>{{ route.origin.state }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="destination">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Destination </mat-header-cell>
                    <mat-cell *matCellDef="let route" class="block" mat-cell>
                        <div class="capitalize">{{ route.destination.city }}<span *ngIf="route.destination.city">,</span></div>
                        <div>{{ route.destination.state }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="miles">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Miles </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.miles }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="ratePerMile">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Rate/Mile </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.rate?.ratePerMile | currency }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="noOfStops">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> No. of Stop </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.noOfStops }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="ratePerStop">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Rate/Stop </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.rate?.ratePerStop | currency }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="pickUpItems">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Pick-Up </mat-header-cell>
                    <mat-cell *matCellDef="let route" class="block" mat-cell>
                        <ng-container *ngFor="let pickUpItem of route.pickUpItems">
                            <div class="capitalize">
                                {{ pickUpItem.name }}
                            </div>
                        </ng-container>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="confirmation">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Confirmation </mat-header-cell>
                    <mat-cell *matCellDef="let route" class="block" mat-cell>
                        <div>{{ route.confirmation.email ? route.confirmation.email : null }}</div>
                        <div>{{ route.confirmation.date ? (route.confirmation.date | date: 'MM/dd/yy') : null }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="refNumber1">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Ref. No. 1 </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.refNumber1 }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="refNumber2">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Ref. No. 2 </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.refNumber2 }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="refNumber3">
                    <mat-header-cell *matHeaderCellDef mat-header-cell mat-sort-header> Ref. No. 3 </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.refNumber3 }}</div>
                    </mat-cell>
                </ng-container>

                <mat-header-row *matHeaderRowDef="this.displayedColumns; sticky: true"></mat-header-row>
                <mat-row *matRowDef="let route; columns: this.displayedColumns;" (click)="edit.emit(route)"></mat-row>
            </mat-table>
        </div>
    `,
    styles: [`
        #container {
            overflow: auto;
            height: 78vh;
        }
        mat-table {
            display: table;
            width: 100%;
        }
        mat-header-row {
            background: white;
        }
        mat-cell,
        mat-header-cell {
            width: 80px !important;
            min-width: 80px !important;
        }
        mat-row {
            cursor: pointer;
        }
        mat-row:hover {
            background: #0097a712;
        }
        mat-cell.block {
            display: inline-grid;
        }
        mat-cell > div {
            margin-right: 8px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .block {
            display: block;
        }
        .capitalize {
            text-transform: capitalize;
        }
        .uppercase {
            text-transform: uppercase;
        }
    `]
})
export class TableComponent {
    @Input() displayedColumns: any[];
    @Input() dataSource: any[];

    @Input() drivers: Driver[];
    @Input() trucks: Truck[];
    @Input() trailers: Trailer[];
    @Input() locations: Location[];
    @Input() customers: Customer[];
    @Input() pickUpItems: PickUpItem[];

    @Output() edit = new EventEmitter();

    @ViewChild(MatSort) matSort: MatSort;
}
