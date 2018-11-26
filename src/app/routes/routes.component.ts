import { Component, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { CoreService } from '@core/shared';

import { SharedRoutesService } from './services/shared-routes.service';
import { RoutesTableComponent } from './routes-table.component';

@Component({
    selector: 'app-routes',
    template: `
        <mat-sidenav-container style="position: absolute; bottom: 0px; top: 64px; width: 100%;">
            <mat-sidenav [opened]="this.sharedRoutesService.searchSideNavOpened$ | async" mode="side" class="mat-elevation-z8">
                <router-outlet
                    (activate)="this.sharedRoutesService.searchSideNavOpened$.next(true)"
                    (deactivate)="this.sharedRoutesService.searchSideNavOpened$.next(false)"
                ></router-outlet>
            </mat-sidenav>
            <mat-sidenav-content>
                <app-toolbar></app-toolbar>
                <app-routes-table></app-routes-table>
            </mat-sidenav-content>
        </mat-sidenav-container>
    `
})
export class RoutesComponent implements OnInit {
    dataSourceSubscription: Subscription;

    @ViewChild('routesTableComponent') routesTableComponent: RoutesTableComponent;

    constructor(
        private coreService: CoreService,
        public sharedRoutesService: SharedRoutesService
    ) { }

    ngOnInit() {
        this.coreService.toolbarTitle$.next('Routes');
    }
}
