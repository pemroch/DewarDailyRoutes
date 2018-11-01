// Angular
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
// rxjs
import { Subscription } from 'rxjs';
// Shared Components
import { SettingsTableComponent } from '@shared/components';
// Module Services
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-users-container',
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
                (click)="this.usersService.addUser()"
                icon="add"
                toolTip="Add User"
                matTooltipPosition="before"
                header-btn-right
            ></app-header-btn>
        </app-header>
        <app-settings-table
            #settingsTableComponent
            [columnObjArr]="this.usersService.columnObjArr$ | async"
            [columnStringArr]="this.usersService.columnStringArr$ | async"
            [dataSource]="this.usersService.dataSource"
            (edit)="this.usersService.edit($event)"
        ></app-settings-table>
    `
})
export class UsersContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    dataSourceSubscription: Subscription;

    @ViewChild('settingsTableComponent') settingsTableComponent: SettingsTableComponent;

    ngOnInit() {
        this.dataSourceSubscription = this.usersService.dataSource$.subscribe();
    }

    ngAfterViewInit(): void {
        this.usersService.dataSource.sort = this.settingsTableComponent.matSort;
    }

    ngOnDestroy() {
        this.dataSourceSubscription.unsubscribe();
    }

    constructor(
        public matDialog: MatDialog,
        private usersService: UsersService
    ) { }
}
