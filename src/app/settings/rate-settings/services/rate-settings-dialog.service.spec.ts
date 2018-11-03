import { TestBed, inject } from '@angular/core/testing';

import { RateSettingsDialogService } from './rate-settings-dialog.service';

describe('RateSettingsDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RateSettingsDialogService]
    });
  });

  it('should be created', inject([RateSettingsDialogService], (service: RateSettingsDialogService) => {
    expect(service).toBeTruthy();
  }));
});
