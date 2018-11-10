import { TestBed, inject } from '@angular/core/testing';

import { RoutesDialiogService } from './routes-dialiog.service';

describe('RoutesDialiogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutesDialiogService]
    });
  });

  it('should be created', inject([RoutesDialiogService], (service: RoutesDialiogService) => {
    expect(service).toBeTruthy();
  }));
});
