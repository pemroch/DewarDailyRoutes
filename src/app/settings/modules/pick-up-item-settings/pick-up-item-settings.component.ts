// Angular
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// rxjs
import { Subscription } from 'rxjs';
// Shared Components
import { SettingsTableComponent } from '@shared/components';
// Module Services
import { PickUpItemSettingsService } from './services/pick-up-item-settings.service';

@Component({
    selector: 'app-pick-up-item-settings',
    template: `
        <app-header text="Pick Up Items">
            <app-header-btn
                icon="arrow_back"
                link="/app/settings"
                toolTip="Settings"
                matTooltipPosition="after"
                header-btn-left
            ></app-header-btn>
            <app-header-btn
                (click)="this.pickUpItemSettingsService.add()"
                icon="add"
                toolTip="Add Item"
                matTooltipPosition="before"
                header-btn-right
            ></app-header-btn>
        </app-header>
        <app-settings-table
            #settingsTableComponent
            [columnObjArr]="this.pickUpItemSettingsService.columnObjArr$ | async"
            [columnStringArr]="this.pickUpItemSettingsService.columnStringArr$ | async"
            [dataSource]="this.pickUpItemSettingsService.dataSource"
            (edit)="this.pickUpItemSettingsService.edit($event)"
        ></app-settings-table>
    `,
    providers: [PickUpItemSettingsService]
})
export class PickUpItemSettingsComponent implements OnInit, AfterViewInit, OnDestroy {
    dataSourceSubscription: Subscription;

    @ViewChild('settingsTableComponent') settingsTableComponent: SettingsTableComponent;

    ngOnInit() {
        this.dataSourceSubscription = this.pickUpItemSettingsService.dataSource$.subscribe();
    }

    ngAfterViewInit(): void {
        this.pickUpItemSettingsService.dataSource.sort = this.settingsTableComponent.matSort;
    }

    ngOnDestroy() {
        this.dataSourceSubscription.unsubscribe();
    }

    constructor(public pickUpItemSettingsService: PickUpItemSettingsService) { }
}
