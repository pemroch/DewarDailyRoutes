import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material';

import { AddEditDialogComponent } from './add-edit-dialog.component';
import { UploadDialogComponent } from './upload-dialog.component';
import { SharedRoutesService } from './services/shared-routes.service';

@Component({
    selector: 'app-toolbar',
    template: `
        <app-header [text]="this.sharedRoutesService.title$ | async">
            <button (click)="this.search()" style="z-index: 1;" mat-icon-button header-btn-left>
                <mat-icon style="color: #2696a9;">search</mat-icon>
            </button>
            <app-header-btn
                *ngIf="this.sharedRoutesService.hasSearch$ | async"
                (click)="this.clearSearch()"
                icon="clear"
                color="warn"
                toolTip="Clear Search"
                matTooltipPosition="after"
                header-btn-left
            ></app-header-btn>
            <app-toolbar-menu
                (addRoute)="this.addRoute()"
                (uploadRoutes)="this.uploadRoutes()"
                header-btn-right
            ></app-toolbar-menu>
        </app-header>
    `
})
export class ToolBarComponent {
    constructor(
        private router: Router,
        private matDialog: MatDialog,
        public sharedRoutesService: SharedRoutesService
    ) { }

    addRoute() {
        setTimeout(() => {
            this.matDialog.open(AddEditDialogComponent, { data: null, width: '75%', height: '90%' });
        }, 400);
    }

    uploadRoutes() {
        setTimeout(() => {
            this.matDialog.open(UploadDialogComponent);
        }, 400);
    }

    search() {
        this.sharedRoutesService.searchSideNavOpened$.next(!this.sharedRoutesService.searchSideNavOpened$.getValue());
        this.router.navigate(['app', 'routes', 'search']);
    }

    clearSearch() {
        this.sharedRoutesService.hasSearch$.next(false);
        this.router.navigate(['app', 'routes']);
    }
}
