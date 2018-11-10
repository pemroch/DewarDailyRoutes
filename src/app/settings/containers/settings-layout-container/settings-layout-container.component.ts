// Angular
import { Component } from '@angular/core';
// Shared Services
import { LayoutService } from '@layout/services';

@Component({
    selector: 'app-settings-layout-container',
    template: `
        <router-outlet (activate)="this.refreshView()"></router-outlet>
    `
})
export class SettingsLayoutContainerComponent {

    refreshView() {
        this.layoutService.toolbarTitle$.next('Settings');
    }

    constructor(private layoutService: LayoutService) { }
}
