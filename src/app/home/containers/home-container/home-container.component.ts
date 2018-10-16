// Angular
import { Component } from '@angular/core';

@Component({
    selector: 'app-home-container',
    template: `
        <p>Daily Routes</p>
    `,
    styles: [`
        :host {
            position: fixed;
            top: 64px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            display: flex;
            justify-content: center;
            place-items: center;
        }
        p {
            color: #aaa;
            font: 400 34px/40px Roboto,"Helvetica Neue",sans-serif;
        }
    `]
})

export class HomeContainerComponent { }
