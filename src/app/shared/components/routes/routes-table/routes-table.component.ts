// Angular
import { Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';

@Component({
    selector: 'app-routes-table',
    template: `
        <div id="container">
            <mat-table #table [dataSource]="this.dataSource" matSort>

                <ng-container matColumnDef="rate">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Rate </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.rate }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="routeNumber">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Route No. </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.routeNumber }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="refNumber">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Ref No. </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.refNumber }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="truckNumber">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Truck No. </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.truckNumber }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="trailerNumber">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Trailer No. </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.trailerNumber }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="driver">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Driver </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.driver }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="loadRef">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Load Ref. </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.loadRef }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="temp">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Temp. </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.temp }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="origin">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Origin </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.origin }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="destination">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Destination </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.destination }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="miles">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Miles </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.miles }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="noOfStops">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> No. of Stop </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.noOfStops }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="pickup">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Pick-up </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.pickup }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="loadDate">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Load Date </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.loadDate }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="weekNumber">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Week No. </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.weekNumber }} </mat-cell>
                </ng-container>

                <ng-container matColumnDef="confirmed">
                    <mat-header-cell *matHeaderCellDef mat-header-cell> Confirmed </mat-header-cell>
                    <mat-cell *matCellDef="let route" mat-cell> {{ route.confirmed }} </mat-cell>
                </ng-container>

                <mat-header-row *matHeaderRowDef="this.displayedColumns"></mat-header-row>
                <mat-row *matRowDef="let route; columns: this.displayedColumns;"></mat-row>
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
    `]
})
export class RoutesTableComponent {
    @Input() dataSource: any[];

    @ViewChild(MatSort) matSort: MatSort;
}
