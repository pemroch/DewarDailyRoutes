// Angular
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import {
    RoutesDialogContainerComponent
} from '../containers/routes-dialog-container/routes-dialog-container.component';
import {
    UploadRoutesDialogContainerComponent
} from '../containers/upload-routes-dialog-container/upload-routes-dialog-container.component';

@Injectable()
export class RoutesMenuBtnService {

    /* Functions **/

    addRoute() {
        setTimeout(() => {
            this.matDialog.open(RoutesDialogContainerComponent, { data: null, width: '75%', height: '90%' });
        }, 400);
    }

    uploadRoutes() {
        setTimeout(() => {
            this.matDialog.open(UploadRoutesDialogContainerComponent);
        }, 400);
    }

    constructor(public matDialog: MatDialog) { }
}
