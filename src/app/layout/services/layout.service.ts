// Angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
// 3rd Party
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LayoutService {
    loading$ = new BehaviorSubject<boolean>(false);
    toolbarTitle$ = new BehaviorSubject<string>('');
    sidenavOpened$ = new BehaviorSubject<boolean>(false);

    navigate(route: string) {
        this.router.navigate(['app', route])
        .then(_ => this.sidenavOpened$.next(false));
    }

    logout() {
        this.angularFireAuth.auth.signOut()
        .then(_ => this.sidenavOpened$.next(false));
    }

    constructor(
        private router: Router,
        private angularFireAuth: AngularFireAuth
    ) { }
}
