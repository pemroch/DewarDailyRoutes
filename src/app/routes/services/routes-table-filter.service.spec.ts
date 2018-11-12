import { TestBed, inject } from '@angular/core/testing';

import { RoutesTableFilterService } from './routes-table-filter.service';

describe('RoutesTableFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutesTableFilterService]
    });
  });

  it('should be created', inject([RoutesTableFilterService], (service: RoutesTableFilterService) => {
    expect(service).toBeTruthy();
  }));
});
