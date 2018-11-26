// Angular
import { Component } from '@angular/core';
// Shared Services
import { CoreService } from '@core/shared';

@Component({
    selector: 'app-settings',
    template: `
        <router-outlet (activate)="this.refreshView()"></router-outlet>
    `
})
export class SettingsComponent {

    refreshView() {
        this.coreService.toolbarTitle$.next('Settings');
    }

    constructor(private coreService: CoreService) { }
}
