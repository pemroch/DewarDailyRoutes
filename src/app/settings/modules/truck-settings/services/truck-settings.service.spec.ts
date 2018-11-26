import { TestBed, inject } from '@angular/core/testing';

import { TruckSettingsService } from './truck-settings.service';

describe('TruckSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TruckSettingsService]
    });
  });

  it('should be created', inject([TruckSettingsService], (service: TruckSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
