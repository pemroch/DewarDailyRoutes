// Angular
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-layout-sidenav-expansion',
    template: `
        <mat-expansion-panel class="layout-sidenav-expansion">
            <mat-expansion-panel-header>
                <mat-panel-title>{{ this.title }}</mat-panel-title>
            </mat-expansion-panel-header>
            <ng-content></ng-content>
        </mat-expansion-panel>
    `,
    styles: [`
        mat-expansion-panel {
            box-shadow: none !important;
            border-bottom: 1px solid #ddd;
        }
        mat-expansion-panel-header:hover {
            background: #e7e7e7 !important;
        }
    `]
})
export class LayoutSidenavExpansionComponent {
    @Input() title: string;
}
