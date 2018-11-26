// Angular
import { Component, ChangeDetectionStrategy } from '@angular/core';
// App Settings
import { AppStatus, AppVersion } from '../app.module';
// Shared Services
import { LoadingService } from '@shared/services';
// Module Services
import { CoreService } from '@core/shared';

@Component({
    selector: 'app-core',
    template: `
        <mat-sidenav-container style="position: fixed; height: 100%; width: 100%;">
            <mat-sidenav [opened]="this.coreService.sidenavOpened$ | async" (closedStart)="this.coreService.sidenavOpened$.next(false)">

                <app-nav-item
                    title="Routes"
                    (navigate)="this.coreService.navigate(['app', 'routes'])"
                ></app-nav-item>

                <app-nav-item
                    title="Settings"
                    (navigate)="this.coreService.navigate(['app', 'settings'])"
                ></app-nav-item>

                <app-nav-item
                    title="Logout"
                    (navigate)="this.coreService.logout()"
                ></app-nav-item>
            </mat-sidenav>

            <mat-sidenav-content>
                <app-tool-bar
                    [appStatus]="this.appStatus"
                    [appVersion]="this.appVersion"
                    [toolbarTitle]="this.coreService.toolbarTitle$ | async"
                    (sidenavToggle)="this.coreService.sidenavOpened$.next(!this.coreService.sidenavOpened$.getValue())"
                ></app-tool-bar>

                <app-loading *ngIf="this.loading$ | async"></app-loading>

                <router-outlet></router-outlet>

            </mat-sidenav-content>
        </mat-sidenav-container>
    `,
    styles: [`
        mat-sidenav-content {
            background: #eee;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreComponent {
    appStatus = AppStatus;
    appVersion = AppVersion;

    loading$ = this.loadingService.loading$;

    constructor(
        private loadingService: LoadingService,
        public coreService: CoreService
    ) { }
}
