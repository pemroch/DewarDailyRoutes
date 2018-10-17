// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
// Module Services
import { SettingsTableService } from './services/settings-table.service';
// Module Containers
import { SettingsSelectionContainerComponent } from './containers/settings-selection-container/settings-selection-container.component';
import { SettingsTableContainerComponent } from './containers/settings-table-container/settings-table-container.component';
import { UsersContainerComponent } from './containers/users-container/users-container.component';
import { DriversContainerComponent } from './containers/drivers-container/drivers-container.component';
// Module Components
import { SettingsTableComponent } from './components/settings-table/settings-table.component';
import { SettingsTableFilterComponent } from './components/settings-table-filter/settings-table-filter.component';
import { AddUserDialogComponent } from './components/add-user-dialog/add-user-dialog.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSortModule,
        MatTableModule,
        RouterModule.forChild([
            { path: '', component: SettingsSelectionContainerComponent },
            { path: 'users', component: UsersContainerComponent }
        ]),
        SharedModule
    ],
    declarations: [
        SettingsSelectionContainerComponent,
        UsersContainerComponent,
        DriversContainerComponent,
        SettingsTableComponent,
        SettingsTableFilterComponent,
        SettingsTableContainerComponent,
        AddUserDialogComponent,
        ComponentsComponent
    ],
    entryComponents: [AddUserDialogComponent],
    providers: [
        SettingsTableService
    ]
})
export class SettingsModule { }
