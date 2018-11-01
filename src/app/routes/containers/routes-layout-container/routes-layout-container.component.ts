// Angular
import { Component, OnInit } from '@angular/core';
// Shared Services
import { LayoutService } from '@layout/services';

@Component({
    selector: 'app-routes-layout-container',
    template: `
        <router-outlet></router-outlet>
    `
})
export class RoutesLayoutContainerComponent implements OnInit {
    ngOnInit() {
        this.layoutService.toolbarTitle$.next('Routes');
    }

    constructor(private layoutService: LayoutService) { }
}
