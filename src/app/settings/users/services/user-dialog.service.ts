// Angular
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
// Firebase
import { auth } from 'firebase/app';
// rxjs
import { Subject } from 'rxjs';
// Shared Services
import { NgFireService } from '@shared/services';
// Shared Models
import { User } from '@shared/models';

@Injectable()
export class UserDialogService {
    error$ = new Subject<string>();
    pending$ = new Subject<boolean>();

    add(user: User) {
        this.pending$.next(true);
        auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(userData => {
            this.ngFireService.set('users', userData.user.uid, {
                email: user.email,
                isAdmin: user.isAdmin || false,
                name: user.name.toLowerCase().trim(),
                uid: userData.user.uid,
            })
            .then(_ => {
                this.matDialog.closeAll();
                setTimeout(() => auth().signOut(), 400);
            })
            .catch(error => {
                this.pending$.next(false);
                this.error$.next(error.message);
            });
        })
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error.message);
        });
    }

    save(user: User) {
        this.pending$.next(true);
        this.ngFireService.update('users', user.uid, {
            isAdmin: user.isAdmin || false,
            name: user.name.toLowerCase().trim()
        })
        .then(_ => {
            this.matDialog.closeAll();
        })
        .catch(error => {
            this.pending$.next(false);
            this.error$.next(error.message);
        });
    }

    constructor(
        private matDialog: MatDialog,
        private ngFireService: NgFireService
    ) { }
}
