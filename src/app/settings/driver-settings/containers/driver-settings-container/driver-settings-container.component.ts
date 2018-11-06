// Angular
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// rxjs
import { Subscription } from 'rxjs';
// Shared Components
import { SettingsTableComponent } from '@shared/components';
// Module Services
import { DriverSettingsService } from '../../services/driver-settings.service';

@Component({
    selector: 'app-driver-settings-container',
    template: `
        <app-header text="Drivers">
            <app-header-btn
                icon="arrow_back"
                link="/app/settings"
                toolTip="Settings"
                matTooltipPosition="after"
                header-btn-left
            ></app-header-btn>
            <app-header-btn
                (click)="this.driverSettingsService.add()"
                icon="add"
                toolTip="Add Driver"
                matTooltipPosition="before"
                header-btn-right
            ></app-header-btn>
        </app-header>
        <app-settings-table
            #settingsTableComponent
            [columnObjArr]="this.driverSettingsService.columnObjArr$ | async"
            [columnStringArr]="this.driverSettingsService.columnStringArr$ | async"
            [dataSource]="this.driverSettingsService.dataSource"
            (edit)="this.driverSettingsService.edit($event)"
        ></app-settings-table>
    `,
    providers: [DriverSettingsService]
})
export class DriverSettingsContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    dataSourceSubscription: Subscription;

    @ViewChild('settingsTableComponent') settingsTableComponent: SettingsTableComponent;

    ngOnInit() {
        this.dataSourceSubscription = this.driverSettingsService.dataSource$.subscribe();
    }

    ngAfterViewInit(): void {
        this.driverSettingsService.dataSource.sort = this.settingsTableComponent.matSort;
    }

    ngOnDestroy() {
        this.dataSourceSubscription.unsubscribe();
    }

    constructor(public driverSettingsService: DriverSettingsService) { }
}
