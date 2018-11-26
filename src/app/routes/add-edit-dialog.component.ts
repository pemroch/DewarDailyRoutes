// Angular
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
// Component Service
import { AddEditService } from './services/add-edit.service';

@Component({
    selector: 'app-add-edit-dialog',
    template: `
        <app-add-edit-form
            [states]="this.addEditService.states"

            [pending]="this.addEditService.pending$ | async"
            [error]="this.addEditService.error$ | async"
            [route]="this.addEditService.route$ | async"
            [drivers]="this.addEditService.drivers$ | async"
            [trucks]="this.addEditService.trucks$ | async"
            [trailers]="this.addEditService.trailers$ | async"
            [rates]="this.addEditService.rates$ | async"
            [locations]="this.addEditService.locations$ | async"
            [customers]="this.addEditService.customers$ | async"
            [pickUpItems]="this.addEditService.pickUpItems$ | async"
            [isSelected]="this.addEditService.isSelected"
            [pickUpItemRate]="this.addEditService.pickUpItemRate"

            [trackByFn]="this.addEditService.trackByFn"
            [compareWith]="this.addEditService.compareWith"

            (add)="this.addEditService.add($event)"
            (save)="this.addEditService.save($event)"
            (clearDate)="this.addEditService.clearDate($event)"
            (checkBoxChanged)="this.addEditService.checkBoxChanged($event)"
            (pickUpItemRateChange)="this.addEditService.pickUpItemRateChange($event)"
            (setStops)="this.addEditService.setStops($event)"
            (ratePerStopKeyup)="this.addEditService.ratePerStopKeyup($event)"
            (ratePerStopEachKeyup)="this.addEditService.ratePerStopEachKeyup($event)"
        ></app-add-edit-form>
    `,
    providers: [AddEditService]
})
export class AddEditDialogComponent implements OnInit  {
    constructor(
        @Inject(MAT_DIALOG_DATA) public routeId: string,
        public addEditService: AddEditService
    ) { }

    ngOnInit() {
        this.addEditService.routeId$.next(this.routeId);
    }

}
