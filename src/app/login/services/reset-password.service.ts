// Angular
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
// 3rd Party
import { Subject } from 'rxjs';
// Module Components
import { ConfirmationSnakbarComponent } from '../components/confirmation-snakbar/confirmation-snakbar.component';

@Injectable()
export class ResetPasswordService {

    error$ = new Subject<string>();
    pending$ = new Subject<boolean>();

    closResetPasswordDialog() {
        this.matDialog.closeAll();
    }

    sendResetPasswordEmail(form: NgForm) {
        this.pending$.next(true);
        this.angularFireAuth.auth.sendPasswordResetEmail(form.value.email)
        .then(_ => {
            this.matDialog.closeAll();
            this.matSnackBar.openFromComponent(ConfirmationSnakbarComponent, {
                duration: 4000,
            });
        })
        .catch(error => {
            this.error$.next(error);
            this.pending$.next(false);
        });
    }

    constructor(
        private angularFireAuth: AngularFireAuth,
        private matDialog: MatDialog,
        private matSnackBar: MatSnackBar,
    ) { }
}
