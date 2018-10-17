// Angular
import { Component, OnDestroy } from '@angular/core';
// Module Services
import { SettingsTableService } from '../../services/settings-table.service';

@Component({
    selector: 'app-settings-table-container',
    template: `
        <app-settings-table-filter (applyFilter)="this.settingsTableService.applyFilter($event)"></app-settings-table-filter>
        <app-settings-table
            [columnObjArr]="this.settingsTableService.columnObjArr"
            [columnStringArr]="this.settingsTableService.columnStringArr"
            [dataSource]="this.settingsTableService.dataSource"
        ></app-settings-table>
    `,
    providers: [SettingsTableService]
})
export class SettingsTableContainerComponent implements OnDestroy {
    tableData$ = this.settingsTableService.tableData$.subscribe();

    ngOnDestroy() {
        this.tableData$.unsubscribe();
    }

    constructor(private settingsTableService: SettingsTableService) { }
}
