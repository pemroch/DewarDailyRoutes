// Angular
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <div id="header-container" class="mat-elevation-z4">
            <ng-content select="[header-btn-left]"></ng-content>
            <span></span>
            <div id="text-container">
                <div *ngIf="text" id="header-text" class="mat-title">{{ text }}</div>
                <div *ngIf="disclaimer" id="disclaimer" class="mat-caption">{{ disclaimer }}</div>
            </div>
            <span></span>
            <ng-content select="[header-btn-right]"></ng-content>
        </div>
    `,
    styles: [`
        #header-container {
            display: flex;
            padding: 8px 0px;
            place-items: center;
        }
        #text-container {
            width: 100%;
            position: absolute;
            text-align: center;
        }
        #header-text {
            color: #2696a9;
            text-transform: capitalize;
            margin: 0px;
        }
        #disclaimer {
            text-align: center;
            color: #f44336;
        }
        span {
            flex: 1
        }
    `]
})
export class HeaderComponent {
    @Input() text: string;
    @Input() disclaimer: string;
}
