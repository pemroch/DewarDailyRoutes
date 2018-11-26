// Angular
import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
      <div class="mat-headline">Loading...</div>
  `,
  styles: [`
      div {
          position: absolute;
          background: white;
          top: 64px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          z-index: 1000;
          display: flex;
          justify-content: center;
          place-items: center;
      }
  `]
})
export class LoadingComponent { }
