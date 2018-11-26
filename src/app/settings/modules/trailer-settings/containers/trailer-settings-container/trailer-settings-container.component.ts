// Angular
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// rxjs
import { Subscription } from 'rxjs';
// Shared Components
import { SettingsTableComponent } from '@shared/components';
// Module Services
import { TrailerSettingsService } from '../../services/trailer-settings.service';

@Component({
    selector: 'app-trailer-settings-container',
    template: `
        <app-header text="Trailers">
            <app-header-btn
                icon="arrow_back"
                link="/app/settings"
                toolTip="Settings"
                matTooltipPosition="after"
                header-btn-left
            ></app-header-btn>
            <app-header-btn
                (click)="this.trailerSettingsService.add()"
                icon="add"
                toolTip="Add Trailer"
                matTooltipPosition="before"
                header-btn-right
            ></app-header-btn>
        </app-header>
        <app-settings-table
            #settingsTableComponent
            [columnObjArr]="this.trailerSettingsService.columnObjArr$ | async"
            [columnStringArr]="this.trailerSettingsService.columnStringArr$ | async"
            [dataSource]="this.trailerSettingsService.dataSource"
            (edit)="this.trailerSettingsService.edit($event)"
        ></app-settings-table>
    `,
    providers: [TrailerSettingsService]
})
export class TrailerSettingsContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    dataSourceSubscription: Subscription;

    @ViewChild('settingsTableComponent') settingsTableComponent: SettingsTableComponent;

    ngOnInit() {
        this.dataSourceSubscription = this.trailerSettingsService.dataSource$.subscribe();
    }

    ngAfterViewInit(): void {
        this.trailerSettingsService.dataSource.sort = this.settingsTableComponent.matSort;
    }

    ngOnDestroy() {
        this.dataSourceSubscription.unsubscribe();
    }

    constructor(public trailerSettingsService: TrailerSettingsService) { }
}
