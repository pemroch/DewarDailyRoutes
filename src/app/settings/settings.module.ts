// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
// Module Containers
import { SettingsSelectionContainerComponent } from './containers/settings-selection-container/settings-selection-container.component';
import { UsersContainerComponent } from './containers/users-container/users-container.component';
import { DriversContainerComponent } from './containers/drivers-container/drivers-container.component';
import { SettingsTableComponent } from './components/settings-table/settings-table.component';
import { SettingsTableContainerComponent } from './containers/settings-table-container/settings-table-container.component';
// Module Components

@NgModule({
    imports: [
        CommonModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        RouterModule.forChild([
            { path: '', component: SettingsSelectionContainerComponent }
        ]),
    ],
    declarations: [
        SettingsSelectionContainerComponent,
        UsersContainerComponent,
        DriversContainerComponent,
        SettingsTableComponent,
        SettingsTableContainerComponent
    ]
})
export class SettingsModule { }
