import { TestBed, inject } from '@angular/core/testing';

import { TrailerSettingsService } from './trailer-settings.service';

describe('TrailerSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrailerSettingsService]
    });
  });

  it('should be created', inject([TrailerSettingsService], (service: TrailerSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
