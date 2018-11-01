// Angular
import { Component, OnInit } from '@angular/core';
// Shared Services
import { LayoutService } from '@layout/services';

@Component({
    selector: 'app-settings-layout-container',
    template: `
        <router-outlet></router-outlet>
    `
})
export class SettingsLayoutContainerComponent implements OnInit {
    ngOnInit() {
        this.layoutService.toolbarTitle$.next('Settings');
    }

    constructor(private layoutService: LayoutService) { }
}
