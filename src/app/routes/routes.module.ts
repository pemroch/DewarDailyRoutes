// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
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
    MatSliderModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
// Module Services
import { RoutesTableService } from './services/routes-table.service';
// Module Containers
import { RoutesContainerComponent } from './containers/routes-container/routes-container.component';
import { RoutesDialogContainerComponent } from './containers/routes-dialog-container/routes-dialog-container.component';
import { UploadRoutesDialogContainerComponent } from './containers/upload-routes-dialog-container/upload-routes-dialog-container.component';
// Mogule Components
import { RoutesTableComponent } from './components/routes-table/routes-table.component';
import { RoutesTableFilterComponent } from './components/routes-table-filter/routes-table-filter.component';
import { RoutesDialogComponent } from './components/routes-dialog/routes-dialog.component';
import { RoutesDialogLoadingComponent } from './components/routes-dialog-loading/routes-dialog-loading.component';
import { RoutesMenuBtnComponent } from './components/routes-menu-btn/routes-menu-btn.component';
import { UploadRoutesDialogComponent } from './components/upload-routes-dialog/upload-routes-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
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
        MatSliderModule,
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
        RoutesTableFilterComponent,
        UploadRoutesDialogContainerComponent,
        UploadRoutesDialogComponent
    ],
    entryComponents: [RoutesDialogContainerComponent, UploadRoutesDialogContainerComponent],
    providers: [RoutesTableService]
})
export class RoutesModule { }
