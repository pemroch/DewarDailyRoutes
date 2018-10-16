// Angular
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
// 3rd Party
import { Subject } from 'rxjs';
// Module Components
import {
    ResetPasswordDialogContainerComponent
} from '../containers/reset-password-dialog-container/reset-password-dialog-container.component';

@Injectable()
export class LoginService {

    error$ = new Subject<string>();
    pending$ = new Subject<boolean>();

    login(form: NgForm) {
        this.pending$.next(true);
        this.angularFireAuth.auth.signInWithEmailAndPassword(form.value.email, form.value.password)
        .then(() => this.router.navigate(['/app/home']))
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error);
        });
    }

    openResetPasswordDialog() {
        this.matDialog.open(ResetPasswordDialogContainerComponent, { width: '280px' });
    }

    constructor(
        private router: Router,
        private angularFireAuth: AngularFireAuth,
        private matDialog: MatDialog
    ) { }
}
