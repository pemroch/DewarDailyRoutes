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
                <mat-icon matListIcon>person_pin</mat-icon>
                <h3 matLine>Drivers</h3>
            </mat-list-item>
            <mat-list-item routerLink="/app/settings/trucks">
                <mat-icon matListIcon>directions_bus</mat-icon>
                <h3 matLine>Trucks</h3>
            </mat-list-item>
            <mat-list-item routerLink="/app/settings/trailers">
                <mat-icon matListIcon>local_shipping</mat-icon>
                <h3 matLine>Trailers</h3>
            </mat-list-item>
            <mat-list-item routerLink="/app/settings/rates">
                <mat-icon matListIcon>local_atm</mat-icon>
                <h3 matLine>Rates</h3>
            </mat-list-item>
            <mat-list-item routerLink="/app/settings/locations">
                <mat-icon matListIcon>map</mat-icon>
                <h3 matLine>Locations</h3>
            </mat-list-item>
            <mat-list-item routerLink="/app/settings/customers">
                <mat-icon matListIcon>store</mat-icon>
                <h3 matLine>Customers</h3>
            </mat-list-item>
            <mat-list-item routerLink="/app/settings/pick-up-items">
                <mat-icon matListIcon>category</mat-icon>
                <h3 matLine>Pick Up Items</h3>
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
