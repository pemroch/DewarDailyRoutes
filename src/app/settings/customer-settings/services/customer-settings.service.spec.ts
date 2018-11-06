import { TestBed, inject } from '@angular/core/testing';

import { CustomerSettingsService } from './customer-settings.service';

describe('CustomerSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerSettingsService]
    });
  });

  it('should be created', inject([CustomerSettingsService], (service: CustomerSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
