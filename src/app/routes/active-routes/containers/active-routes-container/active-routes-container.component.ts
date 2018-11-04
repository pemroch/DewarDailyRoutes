// Angular
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// rxjs
import { Subscription } from 'rxjs';
// Shared Components
import { RoutesTableComponent } from '@shared/components';
// Module Services
import { ActiveRoutesService } from '../../services/active-routes.service';

@Component({
    selector: 'app-active-routes-container',
    template: `
        <app-header text="Active Routes">
            <app-header-btn
                (click)="this.activeRoutesService.addRoute()"
                icon="add"
                toolTip="Add Route"
                matTooltipPosition="above"
                header-btn-right
            ></app-header-btn>
        </app-header>
        <app-routes-table
            #routesTableComponent
            [displayedColumns]="this.activeRoutesService.displayedColumns"
            [dataSource]="this.activeRoutesService.dataSource"
            (edit)="this.activeRoutesService.editRoute($event)"
        ></app-routes-table>
    `,
    providers: [ActiveRoutesService]
})
export class ActiveRoutesContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    dataSourceSubscription: Subscription;

    @ViewChild('routesTableComponent') routesTableComponent: RoutesTableComponent;

    ngOnInit() {
        this.dataSourceSubscription = this.activeRoutesService.dataSource$.subscribe();
    }

    ngAfterViewInit(): void {
        this.activeRoutesService.dataSource.sort = this.routesTableComponent.matSort;
    }

    ngOnDestroy() {
        this.dataSourceSubscription.unsubscribe();
    }

    constructor(private activeRoutesService: ActiveRoutesService) { }
}
