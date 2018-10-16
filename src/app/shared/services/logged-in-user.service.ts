// Angular
import { Injectable } from '@angular/core';
// 3rd Party
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoggedInUserService {
    userClaims$ = new BehaviorSubject({
        email: '',
        isAdmin: false,
        name: '',
        uid: ''
    });
}
