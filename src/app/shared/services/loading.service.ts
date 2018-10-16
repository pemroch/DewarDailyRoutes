// Angular
import { Injectable } from '@angular/core';
// 3rd Party
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService {
    loading$ = new BehaviorSubject(false);
}
