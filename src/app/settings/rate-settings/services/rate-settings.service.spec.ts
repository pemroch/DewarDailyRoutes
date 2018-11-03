import { TestBed, inject } from '@angular/core/testing';

import { RateSettingsService } from './rate-settings.service';

describe('RateSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RateSettingsService]
    });
  });

  it('should be created', inject([RateSettingsService], (service: RateSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
