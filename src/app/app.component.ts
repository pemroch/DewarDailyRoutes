// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// 3rd Party
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
// Shared Services
import { LoadingService, LoggedInUserService } from '@shared/services';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {

    constructor(
        private router: Router,
        private angularFireAuth: AngularFireAuth,
        private loadingService: LoadingService,
        private loggedInUserService: LoggedInUserService
    ) { }

    ngOnInit() {
        this.angularFireAuth.authState.pipe(
            map((user: any) => {
                this.loadingService.loading$.next(true);
                if (user) {
                    user.getIdTokenResult()
                    .then((tokenResult: any) => {
                        this.loggedInUserService.userClaims$.next(tokenResult.claims);
                        this.loadingService.loading$.next(false);
                    });
                } else {
                    this.loggedInUserService.userClaims$.next({
                        email: '',
                        isAdmin: false,
                        name: '',
                        uid: ''
                    });
                    this.router.navigate(['/login'])
                    .then(_ => this.loadingService.loading$.next(false));
                }
            })
        ).subscribe();

    }

}
