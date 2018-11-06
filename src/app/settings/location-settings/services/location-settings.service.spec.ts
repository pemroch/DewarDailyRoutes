import { TestBed, inject } from '@angular/core/testing';

import { LocationSettingsService } from './location-settings.service';

describe('LocationSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationSettingsService]
    });
  });

  it('should be created', inject([LocationSettingsService], (service: LocationSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
