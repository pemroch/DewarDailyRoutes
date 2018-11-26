import { TestBed, inject } from '@angular/core/testing';

import { DriverSettingsDialogService } from './driver-settings-dialog.service';

describe('DriverSettingsDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriverSettingsDialogService]
    });
  });

  it('should be created', inject([DriverSettingsDialogService], (service: DriverSettingsDialogService) => {
    expect(service).toBeTruthy();
  }));
});
