// Angular
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-routes-menu-btn',
    template: `
        <button [matMenuTriggerFor]="menu" color="primary" mat-icon-button>
            <mat-icon>more_vert</mat-icon>
        </button>
        <mat-menu #menu="matMenu">
            <button (click)="addRoute.emit()" mat-menu-item>
                <mat-icon>add</mat-icon>
                <span>Add Route</span>
            </button>
            <input
                #fileInput
                [(ngModel)]="this.file"
                (change)="this.uploadRoutes.emit($event)"
                id="file-upload"
                type="file"
                name="file-upload"
            />
            <button (click)="this.fileInputClick.emit(fileInput)" mat-menu-item>
                <mat-icon>cloud_upload</mat-icon>
                <span>Upload Routes</span>
            </button>
        </mat-menu>
    `,
    styles: [`
        input {
            opacity: 0;
        }
    `]
})
export class RoutesMenuBtnComponent {
    file: any;

    @Output() addRoute = new EventEmitter();
    @Output() uploadRoutes = new EventEmitter();
    @Output() fileInputClick = new EventEmitter();
}
