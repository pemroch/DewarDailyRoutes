import { TestBed, inject } from '@angular/core/testing';

import { PickUpItemSettingsDialogService } from './pick-up-item-settings-dialog.service';

describe('PickUpItemSettingsDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PickUpItemSettingsDialogService]
    });
  });

  it('should be created', inject([PickUpItemSettingsDialogService], (service: PickUpItemSettingsDialogService) => {
    expect(service).toBeTruthy();
  }));
});
