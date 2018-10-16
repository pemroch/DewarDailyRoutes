import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Shared Guards
import { IsLoggedInGuard, IsAdminGuard } from '@shared/guards';
// Shared Services
import { LoadingService, LoggedInUserService, NgFireService } from '@shared/services';

@NgModule({
    imports: [
        CommonModule
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
