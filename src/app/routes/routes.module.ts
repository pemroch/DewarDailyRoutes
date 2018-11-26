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
    MatSidenavModule,
    MatSliderModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';

import { SharedRoutesService } from './services/shared-routes.service';
import { RoutesTableService } from './services/routes-table.service';

import { RoutesComponent } from './routes.component';
import { ToolBarComponent } from './toolbar.component';
import { AddEditDialogComponent } from './add-edit-dialog.component';
import { UploadDialogComponent } from './upload-dialog.component';
import { RoutesTableComponent } from './routes-table.component';
import { SearchComponent } from './search.component';

import { ToolbarMenuComponent } from './components/toolbar-menu.component';
import { AddEditFormComponent } from './components/add-edit-form.component';
import { UploadFormComponent } from './components/upload-form.component';
import { TableFilterComponent } from './components/table-filter.component';
import { TableComponent } from './components/table.component';
import { SearchFormComponent } from './components/search-form.component';


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
        MatSidenavModule,
        MatSliderModule,
        MatSortModule,
        MatTableModule,
        MatToolbarModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: RoutesComponent, children: [
                { path: 'search', component: SearchComponent }
            ] },
        ])
    ],
    declarations: [
        RoutesComponent,
        ToolBarComponent,
        ToolbarMenuComponent,
        AddEditDialogComponent,
        AddEditFormComponent,
        UploadDialogComponent,
        UploadFormComponent,
        RoutesTableComponent,
        TableFilterComponent,
        TableComponent,
        SearchComponent,
        SearchFormComponent
    ],
    entryComponents: [AddEditDialogComponent, UploadDialogComponent],
    providers: [
        SharedRoutesService,
        RoutesTableService,
    ]
})
export class RoutesModule { }
