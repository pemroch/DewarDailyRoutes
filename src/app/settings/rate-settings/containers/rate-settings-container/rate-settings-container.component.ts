// Angular
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// rxjs
import { Subscription } from 'rxjs';
// Shared Components
import { SettingsTableComponent } from '@shared/components';
// Module Services
import { RateSettingsService } from '../../services/rate-settings.service';

@Component({
    selector: 'app-rate-settings-container',
    template: `
        <app-header text="Rates">
            <app-header-btn
                icon="arrow_back"
                link="/app/settings"
                toolTip="Settings"
                matTooltipPosition="after"
                header-btn-left
            ></app-header-btn>
            <app-header-btn
                (click)="this.rateSettingsService.add()"
                icon="add"
                toolTip="Add Rate"
                matTooltipPosition="before"
                header-btn-right
            ></app-header-btn>
        </app-header>
        <app-settings-table
            #settingsTableComponent
            [columnObjArr]="this.rateSettingsService.columnObjArr$ | async"
            [columnStringArr]="this.rateSettingsService.columnStringArr$ | async"
            [dataSource]="this.rateSettingsService.dataSource"
            (edit)="this.rateSettingsService.edit($event)"
        ></app-settings-table>
    `,
    providers: [RateSettingsService]
})
export class RateSettingsContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    dataSourceSubscription: Subscription;

    @ViewChild('settingsTableComponent') settingsTableComponent: SettingsTableComponent;

    ngOnInit() {
        this.dataSourceSubscription = this.rateSettingsService.dataSource$.subscribe();
    }

    ngAfterViewInit(): void {
        this.rateSettingsService.dataSource.sort = this.settingsTableComponent.matSort;
    }

    ngOnDestroy() {
        this.dataSourceSubscription.unsubscribe();
    }

    constructor(public rateSettingsService: RateSettingsService) { }
}
