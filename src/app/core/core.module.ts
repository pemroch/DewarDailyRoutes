// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatExpansionModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
// Module Containers
import { CoreComponent } from './core.component';
// Module Components
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterModule.forChild([
            { path: '', component: CoreComponent, children: [
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', loadChildren: '../home/home.module#HomeModule' },
                { path: 'routes', loadChildren: '../routes/routes.module#RoutesModule' },
                { path: 'settings', loadChildren: '../settings/settings.module#SettingsModule' },
                { path: '**', redirectTo: 'home', pathMatch: 'full' },
            ]}
        ])
    ],
    declarations: [
        CoreComponent,
        ToolBarComponent,
        NavItemComponent,
        LoadingComponent
    ]
})
export class CoreModule { }
