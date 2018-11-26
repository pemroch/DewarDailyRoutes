import { TestBed, inject } from '@angular/core/testing';

import { LocationSettingsDialogService } from './location-settings-dialog.service';

describe('LocationSettingsDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationSettingsDialogService]
    });
  });

  it('should be created', inject([LocationSettingsDialogService], (service: LocationSettingsDialogService) => {
    expect(service).toBeTruthy();
  }));
});
