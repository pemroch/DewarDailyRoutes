// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
// Module Services
import { UsersService } from './services/users.service';
import { UserDialogService } from './services/user-dialog.service';
// Module Containers
import { UsersContainerComponent } from './containers/users-container/users-container.component';
import { UserDialogContainerComponent } from './containers/user-dialog-container/user-dialog-container.component';
// Module Components
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatInputModule,
        RouterModule.forChild([
            { path: '', component: UsersContainerComponent },
        ]),
        SharedModule
    ],
    declarations: [
        UserDialogContainerComponent,
        UsersContainerComponent,
        UserDialogComponent
    ],
    entryComponents: [UserDialogContainerComponent],
    providers: [
        UsersService,
        UserDialogService
    ]
})
export class UsersModule { }
