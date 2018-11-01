// Angular
import { Component } from '@angular/core';

@Component({
    selector: 'app-settings-selection',
    template: `
        <mat-list>
            <mat-list-item routerLink="/app/settings/users">
                <mat-icon matListIcon>group</mat-icon>
                <h3 matLine>Users</h3>
            </mat-list-item>
            <mat-list-item routerLink="/app/settings/drivers">
                <mat-icon matListIcon>local_shipping</mat-icon>
                <h3 matLine>Drivers</h3>
            </mat-list-item>
            <mat-list-item routerLink="/app/settings/rates">
                <mat-icon matListIcon>attach_money</mat-icon>
                <h3 matLine>Rates</h3>
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
        h3,
        mat-icon {
            opacity: .7;
        }
    `]
})
export class SettingsSelectionComponent { }
