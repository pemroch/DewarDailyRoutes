// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-layout-toolbar',
    template: `
        <mat-toolbar color="primary">
            <button (click)="this.sidenavToggle.emit()" mat-icon-button>
                <mat-icon class="material-icons">menu</mat-icon>
            </button>
            <span id="toolbar-title">{{ this.toolbarTitle }}</span>
            <div id="app-settings">
                <span>{{ this.appStatus.status }}</span>
            </div>
            <div id="version">
                <span>{{ this.appVersion.version }}</span>
            </div>
        </mat-toolbar>
    `,
    styles: [`
        mat-toolbar {
            height: 64px !important;
        }
        #toolbar-title {
            text-transform: capitalize;
        }
        #app-settings {
            place-content: center;
            align-items: center;
            display: flex;
            flex: 1 1 100%;
        }
        #version {
            right: 16px;
            font-size: 12px;
            display: flex;
            max-height: 100%;
            place-content: center flex-end;
            align-items: center;
            flex: 1 1 10%;
        }
    `]
})
export class LayoutToolbarComponent {
    @Input() appStatus: any;
    @Input() appVersion: any;
    @Input() toolbarTitle: string;
    @Output() sidenavToggle = new EventEmitter();
}
