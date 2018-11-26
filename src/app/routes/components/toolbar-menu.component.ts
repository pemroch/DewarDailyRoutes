import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-toolbar-menu',
    template: `
        <button [matMenuTriggerFor]="menu" color="primary" mat-icon-button>
            <mat-icon>more_vert</mat-icon>
        </button>
        <mat-menu #menu="matMenu">
            <button (click)="addRoute.emit()" mat-menu-item>
                <mat-icon>add</mat-icon>
                <span>Add Route</span>
            </button>
            <button (click)="this.uploadRoutes.emit()" mat-menu-item>
                <mat-icon>cloud_upload</mat-icon>
                <span>Upload Routes</span>
            </button>
        </mat-menu>
    `,
    styles: [`
        #spacer {
            flex: 1 1 auto;
        }
    `]
})
export class ToolbarMenuComponent {
    @Output() addRoute = new EventEmitter();
    @Output() uploadRoutes = new EventEmitter();

}
