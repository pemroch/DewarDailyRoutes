// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatExpansionModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
// Module Containers
import { LayoutContainerComponent } from './containers/layout-container/layout-container.component';
// Module Components
import { LayoutToolbarComponent } from './components/layout-toolbar/layout-toolbar.component';
import { LayoutNavItemComponent } from './components/layout-nav-item/layout-nav-item.component';
import { LayoutSidenavExpansionComponent } from './components/layout-sidenav-expansion/layout-sidenav-expansion.component';
import { LayoutLoadingComponent } from './components/layout-loading/layout-loading.component';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterModule.forChild([
            { path: '', component: LayoutContainerComponent, children: [
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', loadChildren: '../home/home.module#HomeModule' },
                { path: 'routes', loadChildren: '../routes/routes.module#RoutesModule' },
                { path: 'settings', loadChildren: '../settings/settings.module#SettingsModule' },
                { path: '**', redirectTo: 'home', pathMatch: 'full' },
            ]}
        ])
    ],
    declarations: [
        LayoutContainerComponent,
        LayoutToolbarComponent,
        LayoutNavItemComponent,
        LayoutSidenavExpansionComponent,
        LayoutLoadingComponent
    ]
})
export class LayoutModule { }
