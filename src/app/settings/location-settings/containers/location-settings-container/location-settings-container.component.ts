// Angular
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// rxjs
import { Subscription } from 'rxjs';
// Shared Components
import { SettingsTableComponent } from '@shared/components';
// Module Services
import { LocationSettingsService } from '../../services/location-settings.service';

@Component({
    selector: 'app-location-settings-container',
    template: `
        <app-header text="Locations">
            <app-header-btn
                icon="arrow_back"
                link="/app/settings"
                toolTip="Settings"
                matTooltipPosition="after"
                header-btn-left
            ></app-header-btn>
            <app-header-btn
                (click)="this.locationSettingsService.add()"
                icon="add"
                toolTip="Add Location"
                matTooltipPosition="before"
                header-btn-right
            ></app-header-btn>
        </app-header>
        <app-settings-table
            #settingsTableComponent
            [columnObjArr]="this.locationSettingsService.columnObjArr$ | async"
            [columnStringArr]="this.locationSettingsService.columnStringArr$ | async"
            [dataSource]="this.locationSettingsService.dataSource"
            (edit)="this.locationSettingsService.edit($event)"
        ></app-settings-table>
    `,
    providers: [LocationSettingsService]
})
export class LocationSettingsContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    dataSourceSubscription: Subscription;

    @ViewChild('settingsTableComponent') settingsTableComponent: SettingsTableComponent;

    ngOnInit() {
        this.dataSourceSubscription = this.locationSettingsService.dataSource$.subscribe();
    }

    ngAfterViewInit(): void {
        this.locationSettingsService.dataSource.sort = this.settingsTableComponent.matSort;
    }

    ngOnDestroy() {
        this.dataSourceSubscription.unsubscribe();
    }

    constructor(public locationSettingsService: LocationSettingsService) { }
}
