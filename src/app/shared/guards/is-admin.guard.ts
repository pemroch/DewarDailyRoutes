// Angular
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
// 3rd Party
import { from, Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

@Injectable()
export class IsAdminGuard implements CanActivate {
    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return this.angularFireAuth.authState.pipe(
            take(1),
            switchMap((user: any) => from(user.getIdTokenResult())),
            map((user: any) => user.claims.isAdmin)
        );
    }

    constructor(private angularFireAuth: AngularFireAuth) { }
}
