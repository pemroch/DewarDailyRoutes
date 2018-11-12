// Angular
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header-btn',
    template: `
        <button
            [routerLink]="link"
            [disabled]="disabled"
            matTooltip="{{ toolTip }}"
            [matTooltipPosition]="matTooltipPosition"
            color="primary"
            mat-button
            mat-icon-button>
            <mat-icon>{{ icon }}</mat-icon>
            <ng-content></ng-content>
        </button>
    `,
    styles: [`
        button {
            margin: 0px 8px 0px;
            z-index: 1;
        }
    `]
})
export class HeaderBtnComponent {
    @Input() icon: string;
    @Input() link: string;
    @Input() toolTip: string;
    @Input() matTooltipPosition: string;
    @Input() disabled: boolean;
}
