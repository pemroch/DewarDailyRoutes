// Angular
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';

@Component({
    selector: 'app-routes-table',
    template: `
        <div id="container">
            <mat-table #table [dataSource]="this.dataSource" matSort>

                <ng-container matColumnDef="routeNumber">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Route No. </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.routeNumber }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="rate">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Rate </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.rate.name }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="refNumber1">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Ref. No. 1 </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.refNumber1 }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="refNumber2">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Ref. No. 2 </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.refNumber2 }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="refNumber3">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Ref. No. 3 </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.refNumber3 }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="truck">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Truck </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.truck.name }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="trailer">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Trailer </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.trailer.name }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="driver">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Driver </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.driver.name }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="temp">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Temp. </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.temp }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="origin">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Origin </mat-header-cell>
                    <mat-cell *matCellDef="let route" class="block" mat-cell>
                        <span class="block">{{ route.origin.city }},</span>
                        <span class="block uppercase">{{ route.origin.state }}</span>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="destination">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Destination </mat-header-cell>
                    <mat-cell *matCellDef="let route" class="block" mat-cell>
                        <span class="block">{{ route.destination.city }},</span>
                        <span class="block uppercase">{{ route.destination.state }}</span>
                    </mat-cell>
                </ng-container>

                <ng-container matColumnDef="miles">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Miles </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.miles }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="noOfStops">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> No. of Stop </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.noOfStops }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="pickups">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Pick-ups </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.pickups }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="loadDate">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Load Date </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.loadDate }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="confirmation">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Confirmation </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell>
                        <div>{{ route.confirmation.user ? route.confirmation.user.name : null }}</div>
                        <div>{{ route.confirmation.date ? (route.confirmation.date | date: 'short') : null }}</div>
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
        mat-header-cell,
        mat-cell {
            text-transform: capitalize;
        }
        mat-row {
            cursor: pointer;
        }
        mat-row:hover {
            background: #0097a712;
        }
        .block {
            display: block;
        }
        .uppercase {
            text-transform: uppercase;
        }
    `]
})
export class RoutesTableComponent {
    @Input() displayedColumns: any[];
    @Input() dataSource: any[];

    @Output() edit = new EventEmitter();

    @ViewChild(MatSort) matSort: MatSort;
}
