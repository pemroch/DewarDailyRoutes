import { TestBed, inject } from '@angular/core/testing';

import { ActiveRoutesService } from './active-routes.service';

describe('ActiveRoutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveRoutesService]
    });
  });

  it('should be created', inject([ActiveRoutesService], (service: ActiveRoutesService) => {
    expect(service).toBeTruthy();
  }));
});
