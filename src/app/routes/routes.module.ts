// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
// Module Containers
import { RoutesContainerComponent } from './containers/routes-container/routes-container.component';
import { RoutesDialogContainerComponent } from './containers/routes-dialog-container/routes-dialog-container.component';
// Mogule Components
import { RoutesTableComponent } from './components/routes-table/routes-table.component';
import { RoutesTableFilterComponent } from './components/routes-table-filter/routes-table-filter.component';
import { RoutesDialogComponent } from './components/routes-dialog/routes-dialog.component';
import { RoutesDialogLoadingComponent } from './components/routes-dialog-loading/routes-dialog-loading.component';
import { RoutesMenuBtnComponent } from './components/routes-menu-btn/routes-menu-btn.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: RoutesContainerComponent }
        ])
    ],
    declarations: [
        RoutesContainerComponent,
        RoutesDialogContainerComponent,
        RoutesTableComponent,
        RoutesDialogComponent,
        RoutesDialogLoadingComponent,
        RoutesMenuBtnComponent,
        RoutesTableFilterComponent
    ],
    entryComponents: [RoutesDialogContainerComponent]
})
export class RoutesModule { }
