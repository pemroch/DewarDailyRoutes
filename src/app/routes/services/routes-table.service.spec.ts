import { TestBed, inject } from '@angular/core/testing';

import { RoutesTableService } from './routes-table.service';

describe('RoutesTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutesTableService]
    });
  });

  it('should be created', inject([RoutesTableService], (service: RoutesTableService) => {
    expect(service).toBeTruthy();
  }));
});
