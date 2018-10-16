// Angular
import { Component, OnInit } from '@angular/core';
// Shared Services
import { LayoutService } from '../../../layout/services/layout.service';

@Component({
    selector: 'app-settings-selection-container',
    template: `
        <mat-list>
            <mat-list-item>
                <mat-icon matListIcon>group</mat-icon>
                <h3 matLine>Users</h3>
            </mat-list-item>
            <mat-list-item>
                <mat-icon matListIcon>local_shipping</mat-icon>
                <h3 matLine>Drivers</h3>
            </mat-list-item>
        </mat-list>
    `,
    styles: [`
        mat-list-item {
            outline: none;
            text-transform: capitalize;
            border-bottom: 1px solid #ddd;
        }
        mat-list-item:hover {
            cursor: pointer;
            background: #627c8c38;
        }
    `]
})
export class SettingsSelectionContainerComponent implements OnInit {
    ngOnInit() {
        this.layoutService.toolbarTitle$.next('Settings');
    }

    constructor(private layoutService: LayoutService) { }
}
