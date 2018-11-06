import { TestBed, inject } from '@angular/core/testing';

import { PickUpItemSettingsService } from './pick-up-item-settings.service';

describe('PickUpItemSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PickUpItemSettingsService]
    });
  });

  it('should be created', inject([PickUpItemSettingsService], (service: PickUpItemSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
