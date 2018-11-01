// Angular
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
// rxjs
import { Subscription } from 'rxjs';
// Shared Components
import { SettingsTableComponent } from '@shared/components';
// Module Services
import { DriversService } from '../../services/drivers.service';

@Component({
    selector: 'app-drivers-container',
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
                (click)="this.driversService.addDriver()"
                icon="add"
                toolTip="Add Driver"
                matTooltipPosition="before"
                header-btn-right
            ></app-header-btn>
        </app-header>
        <app-settings-table
            #settingsTableComponent
            [columnObjArr]="this.driversService.columnObjArr$ | async"
            [columnStringArr]="this.driversService.columnStringArr$ | async"
            [dataSource]="this.driversService.dataSource"
            (edit)="this.driversService.edit($event)"
        ></app-settings-table>
    `
})
export class DriversContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    dataSourceSubscription: Subscription;

    @ViewChild('settingsTableComponent') settingsTableComponent: SettingsTableComponent;

    ngOnInit() {
        this.dataSourceSubscription = this.driversService.dataSource$.subscribe();
    }

    ngAfterViewInit(): void {
        this.driversService.dataSource.sort = this.settingsTableComponent.matSort;
    }

    ngOnDestroy() {
        this.dataSourceSubscription.unsubscribe();
    }

    constructor(
        public matDialog: MatDialog,
        private driversService: DriversService
    ) { }
}
