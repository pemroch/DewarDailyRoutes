// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
// Module Containers
import { SettingsLayoutContainerComponent } from './containers/settings-layout-container/settings-layout-container.component';
// Module Components
import { SettingsSelectionComponent } from './components/settings-selection/settings-selection.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        MatListModule,
        RouterModule.forChild([
            { path: '', component: SettingsLayoutContainerComponent, children: [
                { path: '', component: SettingsSelectionComponent },
                { path: 'users', loadChildren: './users/users.module#UsersModule' },
                { path: 'drivers', loadChildren: './drivers/drivers.module#DriversModule' },
                { path: 'rates', loadChildren: './rates/rates.module#RatesModule' }
            ]}
        ])
    ],
    declarations: [
        SettingsSelectionComponent,
        SettingsLayoutContainerComponent
    ]
})
export class SettingsModule { }
