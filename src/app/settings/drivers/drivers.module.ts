// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
// Module Services
import { DriversService } from './services/drivers.service';
import { DriverDialogService } from './services/driver-dialog.service';
// Module Containers
import { DriversContainerComponent } from './containers/drivers-container/drivers-container.component';
import { DriverDialogContainerComponent } from './containers/driver-dialog-container/driver-dialog-container.component';
// Module Components
import { DriverDialogComponent } from './components/driver-dialog/driver-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        RouterModule.forChild([
            { path: '', component: DriversContainerComponent },
        ]),
        SharedModule
    ],
    declarations: [
        DriversContainerComponent,
        DriverDialogContainerComponent,
        DriverDialogComponent
    ],
    entryComponents: [DriverDialogContainerComponent],
    providers: [
        DriversService,
        DriverDialogService
    ]
})
export class DriversModule { }
