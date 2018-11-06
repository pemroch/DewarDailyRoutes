// Angular
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// rxjs
import { Subscription } from 'rxjs';
// Shared Components
import { SettingsTableComponent } from '@shared/components';
// Module Services
import { TruckSettingsService } from '../../services/truck-settings.service';

@Component({
    selector: 'app-truck-settings-container',
    template: `
        <app-header text="Trucks">
            <app-header-btn
                icon="arrow_back"
                link="/app/settings"
                toolTip="Settings"
                matTooltipPosition="after"
                header-btn-left
            ></app-header-btn>
            <app-header-btn
                (click)="this.truckSettingsService.add()"
                icon="add"
                toolTip="Add Truck"
                matTooltipPosition="before"
                header-btn-right
            ></app-header-btn>
        </app-header>
        <app-settings-table
            #settingsTableComponent
            [columnObjArr]="this.truckSettingsService.columnObjArr$ | async"
            [columnStringArr]="this.truckSettingsService.columnStringArr$ | async"
            [dataSource]="this.truckSettingsService.dataSource"
            (edit)="this.truckSettingsService.edit($event)"
        ></app-settings-table>
    `,
    providers: [TruckSettingsService]
})
export class TruckSettingsContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    dataSourceSubscription: Subscription;

    @ViewChild('settingsTableComponent') settingsTableComponent: SettingsTableComponent;

    ngOnInit() {
        this.dataSourceSubscription = this.truckSettingsService.dataSource$.subscribe();
    }

    ngAfterViewInit(): void {
        this.truckSettingsService.dataSource.sort = this.settingsTableComponent.matSort;
    }

    ngOnDestroy() {
        this.dataSourceSubscription.unsubscribe();
    }

    constructor(public truckSettingsService: TruckSettingsService) { }
}
