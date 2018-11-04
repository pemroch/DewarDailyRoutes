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
        this.sidenavOpened$.next(false);
        this.router.navigate(['app', route]);
    }

    logout() {
        this.sidenavOpened$.next(false);
        this.angularFireAuth.auth.signOut();
    }

    constructor(
        private router: Router,
        private angularFireAuth: AngularFireAuth
    ) { }
}
