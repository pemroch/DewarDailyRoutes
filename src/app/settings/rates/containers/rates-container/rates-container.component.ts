// Angular
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
// rxjs
import { Subscription } from 'rxjs';
// Shared Components
import { SettingsTableComponent } from '@shared/components';
// Module Services
import { RatesService } from '../../services/rates.service';

@Component({
    selector: 'app-rates-container',
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
                (click)="this.ratesService.addRate()"
                icon="add"
                toolTip="Add Rate"
                matTooltipPosition="before"
                header-btn-right
            ></app-header-btn>
        </app-header>
        <app-settings-table
            #settingsTableComponent
            [columnObjArr]="this.ratesService.columnObjArr$ | async"
            [columnStringArr]="this.ratesService.columnStringArr$ | async"
            [dataSource]="this.ratesService.dataSource"
            (edit)="this.ratesService.edit($event)"
        ></app-settings-table>
    `
})
export class RatesContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    dataSourceSubscription: Subscription;

    @ViewChild('settingsTableComponent') settingsTableComponent: SettingsTableComponent;

    ngOnInit() {
        this.dataSourceSubscription = this.ratesService.dataSource$.subscribe();
    }

    ngAfterViewInit(): void {
        this.ratesService.dataSource.sort = this.settingsTableComponent.matSort;
    }

    ngOnDestroy() {
        this.dataSourceSubscription.unsubscribe();
    }

    constructor(
        public matDialog: MatDialog,
        private ratesService: RatesService
    ) { }
}
