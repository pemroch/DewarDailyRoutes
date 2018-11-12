import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
// Shared Guards
import { IsLoggedInGuard, IsAdminGuard } from '@shared/guards';
// Shared Services
import { LoadingService, LoggedInUserService, NgFireService } from '@shared/services';
// Shared Components
import {
    HeaderComponent,
    HeaderBtnComponent,
    SettingsTableComponent
} from '@shared/components';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        HeaderBtnComponent,
        SettingsTableComponent
    ],
    exports: [
        HeaderComponent,
        HeaderBtnComponent,
        SettingsTableComponent
    ]
})

export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [
                IsLoggedInGuard,
                IsAdminGuard,
                LoadingService,
                LoggedInUserService,
                NgFireService
            ]
        };
    }
}
