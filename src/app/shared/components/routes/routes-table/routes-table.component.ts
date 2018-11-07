// Angular
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
// Shared Models
import { Driver, Truck, Trailer, Location, Customer, PickUpItem } from '@shared/models';

@Component({
    selector: 'app-routes-table',
    template: `
        <div id="container">
            <mat-table #table [dataSource]="this.dataSource" matSort>

                <ng-container matColumnDef="rate">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Rate </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.rate.name }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="routeNumber">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Route No. </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.routeNumber }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="refNumber1">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Ref. No. 1 </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.refNumber1 }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="refNumber2">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Ref. No. 2 </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.refNumber2 }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="refNumber3">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Ref. No. 3 </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.refNumber3 }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="customers">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Customers </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <ng-container *ngFor="let customerId of route.customers">
                            <div class="capitalize">{{ customers && customerId ? customers[customerId].name : null }}</div>
                        </ng-container>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="truck">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Truck </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ trucks && route.truck ? trucks[route.truck].name : null }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="trailer">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Trailer </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ trailers && route.trailer ? trailers[route.trailer].name : null }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="driver">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Driver </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div class="capitalize">{{ drivers && route.driver ? drivers[route.driver].name : null }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="temp">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Temp. </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.temp }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="origin">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Origin </mat-header-cell>
                    <mat-cell *matCellDef="let route" class="block" mat-cell>
                        <div class="capitalize">{{ route.origin.city }},</div>
                        <div>{{ route.origin.state }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="destination">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Destination </mat-header-cell>
                    <mat-cell *matCellDef="let route" class="block" mat-cell>
                        <div class="capitalize">{{ route.destination.city }},</div>
                        <div>{{ route.destination.state }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="miles">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Miles </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.miles }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="noOfStops">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> No. of Stop </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.noOfStops }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="pickUpItems">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Pick-Up </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <ng-container *ngFor="let pickUpItemId of route.pickUpItems">
                            <div class="capitalize">{{ pickUpItems && pickUpItemId ? pickUpItems[pickUpItemId].name : null }}</div>
                        </ng-container>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="loadDate">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Load Date </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.loadDate | date: 'MM/dd/yy' }}</div>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="confirmation">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Confirmation </mat-header-cell>
                    <mat-cell *matCellDef="let route" class="block" mat-cell>
                        <div>{{ route.confirmation.email ? route.confirmation.email : null }}</div>
                        <div>{{ route.confirmation.date ? (route.confirmation.date | date: 'MM/dd/yy') : null }}</div>
                    </mat-cell>
                </ng-container>

                <mat-header-row *matHeaderRowDef="this.displayedColumns"></mat-header-row>
                <mat-row *matRowDef="let route; columns: this.displayedColumns;" (click)="edit.emit(route)"></mat-row>
            </mat-table>
        </div>
    `,
    styles: [`
        #container {
            background: #eee;
            padding: 0px 4px 4px;
            position: absolute;
            left: 0px;
            right: 0px;
            bottom: 0px;
            top: 120px;
            margin-top: 4px;
        }
        mat-table {
            margin-top: 4px;
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
            width: 75%;
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
export class RoutesTableComponent {
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
