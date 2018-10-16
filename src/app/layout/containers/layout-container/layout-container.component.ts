// Angular
import { Component, ChangeDetectionStrategy } from '@angular/core';
// App Settings
import { AppStatus, AppVersion } from '../../../app.module';
// Module Services
import { LayoutService } from '../../services/layout.service';

@Component({
    selector: 'app-layout-container',
    template: `
        <mat-sidenav-container style="position: fixed; height: 100%; width: 100%;">
            <mat-sidenav [opened]="this.layoutService.sidenavOpened$ | async" (closedStart)="this.layoutService.sidenavOpened$.next(false)">
                <app-layout-nav-item
                    title="Settings"
                    (navigate)="this.layoutService.navigate('settings', 'Settings')"
                ></app-layout-nav-item>
                <app-layout-nav-item
                    title="Logout"
                    (navigate)="this.layoutService.logout()"
                ></app-layout-nav-item>
            </mat-sidenav>
            <mat-sidenav-content>
                <app-layout-toolbar
                    [appStatus]="this.appStatus"
                    [appVersion]="this.appVersion"
                    [toolbarTitle]="this.layoutService.toolbarTitle$ | async"
                    (sidenavToggle)="this.layoutService.sidenavOpened$.next(!this.layoutService.sidenavOpened$.getValue())"
                ></app-layout-toolbar>
                <router-outlet></router-outlet>
            </mat-sidenav-content>
        </mat-sidenav-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutContainerComponent {
    appStatus = AppStatus;
    appVersion = AppVersion;

    constructor(public layoutService: LayoutService) { }
}
