// Angular
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-settings-table',
    template: `
        <mat-table #table [dataSource]="this.dataSource" matSort>
            <ng-container *ngFor="let col of this.columnObjArr" [matColumnDef]="col.id">
                <mat-header-cell *matHeaderCellDef mat-sort-header>{{ col.name }}</mat-header-cell>
                <mat-cell *matCellDef="let row">
                    <ng-container [ngSwitch]="col.type">
                        <ng-container *ngSwitchCase="'string'">{{ row[col.id] }}</ng-container>
                        <ng-container *ngSwitchCase="'boolean'">{{ row[col.id] ? '√' : 'x' }}</ng-container>
                        <ng-container *ngSwitchDefault>{{ row[col.id] }}</ng-container>
                    </ng-container>
                </mat-cell>
            </ng-container>
            <mat-header-row *matHeaderRowDef="this.columnStringArr"></mat-header-row>
            <mat-row *matRowDef="let row; columns: this.columnStringArr;"></mat-row>
        </mat-table>
    `,
    styles: [`
        mat-header-cell, mat-cell {
            text-transform: capitalize;
        }
    `]
})
export class SettingsTableComponent {
    @Input() columnObjArr: any[];
    @Input() columnStringArr: any[];
    @Input() dataSource: any[];
}
