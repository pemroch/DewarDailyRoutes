// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
// Module Containers
import { LayoutContainerComponent } from './containers/layout-container/layout-container.component';
// Module Components
import { LayoutToolbarComponent } from './components/layout-toolbar/layout-toolbar.component';
import { LayoutNavItemComponent } from './components/layout-nav-item/layout-nav-item.component';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterModule.forChild([
            { path: '', component: LayoutContainerComponent, children: [
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', loadChildren: '../home/home.module#HomeModule' },
                { path: 'settings', loadChildren: '../settings/settings.module#SettingsModule' },
            ]}
        ])
    ],
    declarations: [
        LayoutContainerComponent,
        LayoutToolbarComponent,
        LayoutNavItemComponent
    ]
})
export class LayoutModule { }
