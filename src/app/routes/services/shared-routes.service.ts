import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class SharedRoutesService {
    title$ = new Subject<string>();
    hasSearch$ = new BehaviorSubject<boolean>(false);
    searchSideNavOpened$ = new BehaviorSubject<boolean>(false);
}
