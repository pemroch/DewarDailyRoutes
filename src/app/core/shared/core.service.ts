// Angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
// 3rd Party
import { BehaviorSubject } from 'rxjs';
// Shared Services
import { LoadingService } from '@shared/services';

@Injectable()
export class CoreService {
    loading$ = new BehaviorSubject<boolean>(false);
    toolbarTitle$ = new BehaviorSubject<string>('');
    sidenavOpened$ = new BehaviorSubject<boolean>(false);

    navigate(route: string[]) {
        this.sidenavOpened$.next(false);
        this.loadingService.loading$.next(true);
        setTimeout(() => {
            this.router.navigate(route)
            .then(_ => this.loadingService.loading$.next(false));
        }, 400);
    }

    logout() {
        this.sidenavOpened$.next(false);
        setTimeout(() => {
            this.angularFireAuth.auth.signOut()
            .then(_ => this.loadingService.loading$.next(false));
        }, 400);
    }

    constructor(
        private router: Router,
        private loadingService: LoadingService,
        private angularFireAuth: AngularFireAuth
    ) { }
}
