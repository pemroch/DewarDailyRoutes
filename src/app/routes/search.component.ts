import { Component, ChangeDetectorRef } from '@angular/core';

import { SearchService } from './services/search.service';

@Component({
    selector: 'app-search',
    template: `
        <app-header background="#eee" boxShadow="none">
            <app-header-btn (click)="this.searchService.closeSearch()" icon="clear" header-btn-right></app-header-btn>
        </app-header>

        <app-search-form
            [states]="this.searchService.states"
            [searchForm]="this.searchService.searchForm$ | async"
            [customers]="this.searchService.customers$ | async"
            [drivers]="this.searchService.drivers$ | async"
            [locations]="this.searchService.locations$ | async"
            [pickUpItems]="this.searchService.pickUpItems$ | async"
            [rates]="this.searchService.rates$ | async"
            [trailers]="this.searchService.trailers$ | async"
            [trucks]="this.searchService.trucks$ | async"
            (clearDate)="this.searchService.clearDate($event)"
            (cancel)="this.searchService.closeSearch()"
            (search)="this.search()"
        ></app-search-form>
    `,
    providers: [SearchService]
})
export class SearchComponent {
    constructor(
        public changeDetectorRef: ChangeDetectorRef,
        public searchService: SearchService
    ) { }

    search() {
        this.searchService.search()
        .then(_ => this.changeDetectorRef.detectChanges());
    }
}
