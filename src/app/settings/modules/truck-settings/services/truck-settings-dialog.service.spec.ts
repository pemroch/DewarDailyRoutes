import { TestBed, inject } from '@angular/core/testing';

import { TruckSettingsDialogService } from './truck-settings-dialog.service';

describe('TruckSettingsDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TruckSettingsDialogService]
    });
  });

  it('should be created', inject([TruckSettingsDialogService], (service: TruckSettingsDialogService) => {
    expect(service).toBeTruthy();
  }));
});
