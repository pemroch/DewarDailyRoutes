import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
// Shared Guards
import { IsLoggedInGuard, IsAdminGuard } from '@shared/guards';
// Shared Services
import { LoadingService, LoggedInUserService, NgFireService } from '@shared/services';
// Shared Components
import { HeaderComponent, HeaderBtnComponent } from '@shared/components';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        HeaderBtnComponent
    ],
    exports: [
        HeaderComponent,
        HeaderBtnComponent
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
