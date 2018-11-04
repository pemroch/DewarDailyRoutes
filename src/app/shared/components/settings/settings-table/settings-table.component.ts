// Angular
import { Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { MatSort } from '@angular/material';

@Component({
    selector: 'app-settings-table',
    template: `
        <div id="container">
            <mat-table #table [dataSource]="this.dataSource" matSort>
                <ng-container *ngFor="let col of this.columnObjArr" [matColumnDef]="col.id">
                    <mat-header-cell *matHeaderCellDef mat-sort-header>{{ col.name }}</mat-header-cell>
                    <mat-cell *matCellDef="let row">
                        <ng-container [ngSwitch]="col.type">
                            <ng-container *ngSwitchCase="'string'">{{ row[col.id] }}</ng-container>
                            <ng-container *ngSwitchCase="'boolean'">{{ row[col.id] ? '√' : 'x' }}</ng-container>
                            <ng-container *ngSwitchCase="'currency'">{{ row[col.id] | currency }}</ng-container>
                            <ng-container *ngSwitchDefault>{{ row[col.id] }}</ng-container>
                        </ng-container>
                    </mat-cell>
                </ng-container>
                <mat-header-row *matHeaderRowDef="this.columnStringArr"></mat-header-row>
                <mat-row *matRowDef="let row; columns: this.columnStringArr;" (click)="this.edit.emit(row)"></mat-row>
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
export class SettingsTableComponent {
    @Input() columnObjArr: any[];
    @Input() columnStringArr: any[];
    @Input() dataSource: any[];

    @Output() edit = new EventEmitter();

    @ViewChild(MatSort) matSort: MatSort;
}
