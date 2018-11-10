// Angular
import { Component } from '@angular/core';

@Component({
    selector: 'app-routes-dialog-loading',
    template: `
        <div class="mat-headline">Loading...</div>
    `,
    styles: [`
        div {
            height: 100%;
            display: flex;
            justify-content: center;
            place-items: center;
            color: #0097a7;
        }
    `]
})
export class RoutesDialogLoadingComponent { }
