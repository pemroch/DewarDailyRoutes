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
            mat-icon-button
            mat-raised-button>
            <mat-icon>{{ icon }}</mat-icon>
        </button>
    `,
    styles: [`
        button {
            margin: 0px 8px 0px;
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
