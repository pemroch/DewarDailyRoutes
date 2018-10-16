// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-layout-nav-item',
    template: `
        <a (click)="navigate.emit()" mat-button>
            <span mat-line>{{ title }}</span>
        </a>
    `,
    styles: [`
        a {
            width: 100%;
            text-align: left;
            padding-left: 24px;
            padding-top: 6px;
            padding-bottom: 6px;
            border-bottom: 1px solid #ddd;
        }
        a:hover {
            opacity: .8;
        }
        span {
            font-size: 15px;
            font-weight: 400;
        }
    `]
})
export class LayoutNavItemComponent {
    @Input() title: string;

    @Output() navigate = new EventEmitter();
}
