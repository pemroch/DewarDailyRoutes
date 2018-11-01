// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
// Module Services
import { RatesService } from './services/rates.service';
import { RateDialogService } from './services/rate-dialog.service';
// Module Containers
import { RatesContainerComponent } from './containers/rates-container/rates-container.component';
import { RateDialogContainerComponent } from './containers/rate-dialog-container/rate-dialog-container.component';
// Module Components
import { RateDialogComponent } from './components/rate-dialog/rate-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        RouterModule.forChild([
            { path: '', component: RatesContainerComponent },
        ]),
        SharedModule
    ],
    declarations: [
        RatesContainerComponent,
        RateDialogComponent,
        RateDialogContainerComponent
    ],
    entryComponents: [RateDialogContainerComponent],
    providers: [
        RatesService,
        RateDialogService,
    ]
})
export class RatesModule { }
