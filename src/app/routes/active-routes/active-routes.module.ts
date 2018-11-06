// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
// Mogule Containers
import { ActiveRoutesContainerComponent } from './containers/active-routes-container/active-routes-container.component';
import { ActiveRoutesDialogContainerComponent } from './containers/active-routes-dialog-container/active-routes-dialog-container.component';
// Mogule Components
import { ActiveRoutesDialogComponent } from './components/active-routes-dialog/active-routes-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatNativeDateModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: ActiveRoutesContainerComponent }
        ])
    ],
    declarations: [
        ActiveRoutesContainerComponent,
        ActiveRoutesDialogContainerComponent,
        ActiveRoutesDialogComponent
    ],
    entryComponents: [ActiveRoutesDialogContainerComponent]
})
export class ActiveRoutesModule { }
