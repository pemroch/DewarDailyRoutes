// Angular
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-settings-table-filter',
    template: `
        <mat-form-field>
            <mat-label>Filter</mat-label>
            <input
                #filter
                (keyup)="applyFilter.emit(filter.value)"
                autocorrect="off"
                autocomplete="off"
                matInput
            />
        </mat-form-field>
    `,
    styles: [`
        :host {
            display: block;
            padding: 8px;
        }
        mat-form-field {
            width: 100%;
            height: 48px;
        }
    `]
})
export class SettingsTableFilterComponent {
    @Output() applyFilter = new EventEmitter();
}
