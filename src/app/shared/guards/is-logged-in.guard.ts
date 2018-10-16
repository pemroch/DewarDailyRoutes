// Angular
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
// 3rd Party
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable()
export class IsLoggedInGuard implements CanActivate {
    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return this.angularFireAuth.authState.pipe(
            take(1),
            map((user: any) => !!user),
            tap((loggedIn: boolean) => {
                if (!loggedIn) {
                    this.router.navigate(['/login']);
                }
            })
        );
    }

    constructor(
        private router: Router,
        private angularFireAuth: AngularFireAuth
    ) { }
}
