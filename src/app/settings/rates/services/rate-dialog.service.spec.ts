import { TestBed, inject } from '@angular/core/testing';

import { RateDialogService } from './rate-dialog.service';

describe('RateDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RateDialogService]
    });
  });

  it('should be created', inject([RateDialogService], (service: RateDialogService) => {
    expect(service).toBeTruthy();
  }));
});
