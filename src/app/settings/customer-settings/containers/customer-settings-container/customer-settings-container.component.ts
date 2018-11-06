// Angular
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// rxjs
import { Subscription } from 'rxjs';
// Shared Components
import { SettingsTableComponent } from '@shared/components';
// Module Services
import { CustomerSettingsService } from '../../services/customer-settings.service';

@Component({
    selector: 'app-customer-settings-container',
    template: `
        <app-header text="Customers">
            <app-header-btn
                icon="arrow_back"
                link="/app/settings"
                toolTip="Settings"
                matTooltipPosition="after"
                header-btn-left
            ></app-header-btn>
            <app-header-btn
                (click)="this.customerSettingsService.add()"
                icon="add"
                toolTip="Add Customer"
                matTooltipPosition="before"
                header-btn-right
            ></app-header-btn>
        </app-header>
        <app-settings-table
            #settingsTableComponent
            [columnObjArr]="this.customerSettingsService.columnObjArr$ | async"
            [columnStringArr]="this.customerSettingsService.columnStringArr$ | async"
            [dataSource]="this.customerSettingsService.dataSource"
            (edit)="this.customerSettingsService.edit($event)"
        ></app-settings-table>
    `,
    providers: [CustomerSettingsService]
})
export class CustomerSettingsContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    dataSourceSubscription: Subscription;

    @ViewChild('settingsTableComponent') settingsTableComponent: SettingsTableComponent;

    ngOnInit() {
        this.dataSourceSubscription = this.customerSettingsService.dataSource$.subscribe();
    }

    ngAfterViewInit(): void {
        this.customerSettingsService.dataSource.sort = this.settingsTableComponent.matSort;
    }

    ngOnDestroy() {
        this.dataSourceSubscription.unsubscribe();
    }

    constructor(public customerSettingsService: CustomerSettingsService) { }
}
