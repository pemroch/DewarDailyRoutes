// Angular
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// rxjs
import { Subscription } from 'rxjs';
// Shared Services
import { LayoutService } from '@layout/services';
// Module Services
import { RoutesTableService } from '../../services/routes-table.service';
import { RoutesTableFilterService } from '../../services/routes-table-filter.service';
import { RoutesMenuBtnService } from '../../services/routes-menu-btn.service';
// Module Components
import { RoutesTableComponent } from '../../components/routes-table/routes-table.component';

@Component({
    selector: 'app-routes-container',
    template: `
        <app-header text="Routes">
            <app-routes-menu-btn
                (addRoute)="this.routesMenuBtnService.addRoute()"
                (fileInputClick)="this.routesMenuBtnService.fileInputClick($event)"
                (uploadRoutes)="this.routesMenuBtnService.uploadRoutes($event)"
                header-btn-right
            ></app-routes-menu-btn>
        </app-header>
        <app-routes-table-filter
            [dataSourceLength]="this.routesTableService.dataSource.data?.length"
            (applyFilter)="this.routesTableFilterService.applyFilter($event)"
            table-filter
        ></app-routes-table-filter>
        <app-routes-table
            #routesTableComponent
            [displayedColumns]="this.routesTableService.displayedColumns"
            [dataSource]="this.routesTableService.dataSource"
            [drivers]="this.routesTableService.drivers$ | async"
            [trucks]="this.routesTableService.trucks$ | async"
            [trailers]="this.routesTableService.trailers$ | async"
            [locations]="this.routesTableService.locations$ | async"
            [customers]="this.routesTableService.customers$ | async"
            [pickUpItems]="this.routesTableService.pickUpItems$ | async"
            (edit)="this.routesTableService.editRoute($event)"
        ></app-routes-table>
    `,
    providers: [RoutesTableService, RoutesTableFilterService, RoutesMenuBtnService]
})
export class RoutesContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    dataSourceSubscription: Subscription;

    @ViewChild('routesTableComponent') routesTableComponent: RoutesTableComponent;

    ngOnInit() {
        this.layoutService.toolbarTitle$.next('Routes');
        this.dataSourceSubscription = this.routesTableService.dataSource$.subscribe();
    }

    ngAfterViewInit(): void {
        this.routesTableService.dataSource.sort = this.routesTableComponent.matSort;
    }

    ngOnDestroy() {
        this.dataSourceSubscription.unsubscribe();
    }

    constructor(
        private layoutService: LayoutService,
        public routesTableService: RoutesTableService,
        public routesTableFilterService: RoutesTableFilterService,
        public routesMenuBtnService: RoutesMenuBtnService
        ) { }
}
