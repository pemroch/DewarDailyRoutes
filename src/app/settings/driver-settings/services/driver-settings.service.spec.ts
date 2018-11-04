import { TestBed, inject } from '@angular/core/testing';

import { DriverSettingsService } from './driver-settings.service';

describe('DriverSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriverSettingsService]
    });
  });

  it('should be created', inject([DriverSettingsService], (service: DriverSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
