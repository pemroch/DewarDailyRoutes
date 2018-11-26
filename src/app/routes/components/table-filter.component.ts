// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-table-filter',
    template: `
        <div *ngIf="this.dataSourceLength" id="container">
            <mat-form-field *ngIf="this.dataSourceLength">
                <input
                    (keyup)="applyFilter.emit($event.target.value)"
                    placeholder="Filter"
                    autocorrect="off"
                    autocomplete="off"
                    matInput
                >
            </mat-form-field>
        </div>
    `,
    styles: [`
        #container {
            background: white;
            display: block;
            padding: 24px 24px 0px;
            height: 64px;
        }
        mat-form-field{
            font-size: 14px;
            width: 100%;
        }
    `]
})
export class TableFilterComponent {
    @Input() dataSourceLength: any;
    @Output() applyFilter = new EventEmitter();
}
