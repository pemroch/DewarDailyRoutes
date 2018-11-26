// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
// Module Components
import { SettingsComponent } from './settings.component';
import { SettingsSelectionComponent } from './components/settings-selection.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        MatListModule,
        RouterModule.forChild([
            { path: '', component: SettingsComponent, children: [
                { path: '', component: SettingsSelectionComponent },
                { path: 'users', loadChildren: './modules/user-settings/user-settings.module#UserSettingsModule' },
                { path: 'drivers', loadChildren: './modules/driver-settings/driver-settings.module#DriverSettingsModule' },
                { path: 'trucks', loadChildren: './modules/truck-settings/truck-settings.module#TruckSettingsModule' },
                { path: 'trailers', loadChildren: './modules/trailer-settings/trailer-settings.module#TrailerSettingsModule' },
                { path: 'rates', loadChildren: './modules/rate-settings/rate-settings.module#RateSettingsModule' },
                { path: 'locations', loadChildren: './modules/location-settings/location-settings.module#LocationSettingsModule' },
                { path: 'customers', loadChildren: './modules/customer-settings/customer-settings.module#CustomerSettingsModule' },
                {
                    path: 'pick-up-items',
                    loadChildren: './modules/pick-up-item-settings/pick-up-item-settings.module#PickUpItemSettingsModule'
                },
            ]}
        ])
    ],
    declarations: [
        SettingsComponent,
        SettingsSelectionComponent
    ]
})
export class SettingsModule { }
