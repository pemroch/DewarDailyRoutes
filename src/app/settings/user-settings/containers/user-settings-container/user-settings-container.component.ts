// Angular
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// rxjs
import { Subscription } from 'rxjs';
// Shared Components
import { SettingsTableComponent } from '@shared/components';
// Module Services
import { UserSettingsService } from '../../services/user-settings.service';

@Component({
    selector: 'app-user-settings-container',
    template: `
        <app-header text="Users">
            <app-header-btn
                icon="arrow_back"
                link="/app/settings"
                toolTip="Settings"
                matTooltipPosition="after"
                header-btn-left
            ></app-header-btn>
            <app-header-btn
                (click)="this.userSettingsService.addUser()"
                icon="add"
                toolTip="Add User"
                matTooltipPosition="before"
                header-btn-right
            ></app-header-btn>
        </app-header>
        <app-settings-table
            #settingsTableComponent
            [columnObjArr]="this.userSettingsService.columnObjArr$ | async"
            [columnStringArr]="this.userSettingsService.columnStringArr$ | async"
            [dataSource]="this.userSettingsService.dataSource"
            (edit)="this.userSettingsService.edit($event)"
        ></app-settings-table>
    `
})
export class UserSettingsContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    dataSourceSubscription: Subscription;

    @ViewChild('settingsTableComponent') settingsTableComponent: SettingsTableComponent;

    ngOnInit() {
        this.dataSourceSubscription = this.userSettingsService.dataSource$.subscribe();
    }

    ngAfterViewInit(): void {
        this.userSettingsService.dataSource.sort = this.settingsTableComponent.matSort;
    }

    ngOnDestroy() {
        this.dataSourceSubscription.unsubscribe();
    }

    constructor(private userSettingsService: UserSettingsService) { }
}
